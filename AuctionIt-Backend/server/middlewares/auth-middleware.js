var User = require("../model/user");
var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

exports.checkUserAuth = async (req, res, next) => {
	let token;
	const { authorization } = req.headers;
	if (authorization && authorization.startsWith("token")) {
		try {
			token = authorization.split(" ")[1];
			const { id } = jwt.verify(token, process.env.JWT_ACCESS_KEY);
			req.user = await User.findById(id).select("-password");
			if (req.user) {
				next();
			} else {
				res.status(500).json({
					Error: "True",
					message: "Unauthorized User",
				});
			}
		} catch (error) {
			res
				.status(500)
				.json({ Error: "True", message: error.message || "Unauthorized User" });
		}
	}
	if (!token) {
		res
			.status(401)
			.json({ Error: "True", message: "Unauthorized User , No token" });
	}
};
