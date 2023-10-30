const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER, // Your email address
		pass: process.env.EMAIL_PASS, // Your email password
	},
});

const sendVerificationMail = (UserEMail, token) => {
	const link = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: UserEMail,
		subject: "Email Verification",
		html: `<p>Please click the following link to verify your email: ${link}</p><p><a href="${link}">Click Here</a></p>`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error("Error in sending email:", error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};
module.exports = sendVerificationMail;
