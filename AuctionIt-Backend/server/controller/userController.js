const Joi = require("joi");
var jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const sendVerificationMail = require("../helper/sendVerificationMail");

const userSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

const registerUser = async (req, res) => {
	const { error } = userSchema.validate(req.body);

	if (error) {
		return res
			.status(400)
			.json({ Error: true, Message: error.details[0].message });
	}

	const { name, email, password } = req.body;

	try {
		const existUser = await User.findOne({ email });
		if (existUser) {
			return res
				.status(400)
				.json({ Error: true, Message: "User already exists with this email" });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			name,
			email,
			password: hashedPassword,
		});

		try {
			const token = jwt.sign(
				{ email },
				process.env.JWT_VERIFY_MAIL_SECRET_KEY,
				{
					expiresIn: "15m",
				},
			);
			sendVerificationMail(email, token);
		} catch (emailError) {
			console.error("Error in sending verification email:", emailError);
			return res
				.status(500)
				.json({ Error: true, Message: "Error in sending verification email" });
		}

		await newUser.save();

		return res.status(201).json({
			Error: false,
			Message: "User registered successfully Please Verify Your Email",
			user: newUser,
		});
	} catch (error) {
		console.error("Error in registering user:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email, isEmailVerified: true });
		if (!user) {
			return res.status(400).json({ Error: true, Message: "User not found" });
		}

		const isPasswordValid = await bcrypt.compare(password, user.password);
		if (!isPasswordValid) {
			return res.status(400).json({ Error: true, Message: "Invalid password" });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_KEY, {
			expiresIn: "7d",
		});
		return res
			.status(200)
			.json({ Error: false, Message: "Login successful", token });
	} catch (error) {
		console.error("Error in user login:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const verifyEmail = async (req, res) => {
	const { token } = req.query;

	if (!token) {
		return res.status(400).json({ Error: true, Message: "Token not provided" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_VERIFY_MAIL_SECRET_KEY);
		const { email } = decoded;

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ Error: true, Message: "User not found" });
		}
		user.isEmailVerified = true;
		await user.save();
		return res
			.status(200)
			.json({ Error: false, Message: "Email verification successful" });
	} catch (error) {
		console.error("Error in email verification:", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

const getLoggedInUserInfo = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const loggedInUser = await User.findById(loggedInUserId);
		if (!loggedInUser) {
			return res.status(404).json({ Error: true, Message: "User not found" });
		}
		return res.status(200).json({ Error: false, UserInfo: loggedInUser });
	} catch (error) {
		console.error("Error retrieving user information: ", error);
		return res
			.status(500)
			.json({ Error: true, Message: "Internal server error" });
	}
};

module.exports = { registerUser, loginUser, verifyEmail, getLoggedInUserInfo };
