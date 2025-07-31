// controllers/usersController.js
const usersStorage = require("../storages/usersStorage");
const {
	body,
	oneOf,
	validationResult,
	query,
	matchedData,
} = require("express-validator");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
	body("firstName")
		.trim()
		.isAlpha()
		.withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 })
		.withMessage(`First name ${lengthErr}`),
	body("lastName")
		.trim()
		.isAlpha()
		.withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 })
		.withMessage(`Last name ${lengthErr}`),
	body("email")
		.trim()
		.notEmpty()
		.withMessage("Please enter email")
		.isEmail()
		.withMessage(`Enter valid email`),
	body("age")
		.optional({ values: "falsy" })
		.isInt({ min: 18, max: 120 })
		.withMessage("Please enter numbers only"),
	body("bio")
		.trim()
		.optional({ values: "falsy" })
		.isLength({ max: 200 })
		.withMessage("Bio must be less that 200 characters"),
];

// We can pass an entire array of middleware validations to our controller.
exports.usersCreatePost = [
	validateUser,
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("createUser", {
				title: "Create user",
				errors: errors.array(),
			});
		}
		const { firstName, lastName, email, age, bio } = req.body;
		usersStorage.addUser({ firstName, lastName, email, age, bio });
		res.redirect("/");
	},
];

exports.usersListGet = (req, res) => {
	res.render("index", {
		title: "User list",
		users: usersStorage.getUsers(),
	});
};

exports.usersCreateGet = (req, res) => {
	res.render("createUser", {
		title: "Create user",
	});
};

exports.usersUpdateGet = (req, res) => {
	const user = usersStorage.getUser(req.params.id);
	res.render("updateUser", {
		title: "Update user",
		user: user,
	});
};

exports.usersUpdatePost = [
	validateUser,
	(req, res) => {
		const user = usersStorage.getUser(req.params.id);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("updateUser", {
				title: "Update user",
				user: user,
				errors: errors.array(),
			});
		}
		const { firstName, lastName, email, age, bio } = req.body;
		usersStorage.updateUser(req.params.id, {
			firstName,
			lastName,
			email,
			age,
			bio,
		});
		res.redirect("/");
	},
];

// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
	usersStorage.deleteUser(req.params.id);
	res.redirect("/");
};

const validateSearchUser = oneOf(
	[
		query("searchFname")
			.trim()
			.notEmpty()
			.withMessage("Please enter first name")
			.bail()
			.isAlpha()
			.withMessage(alphaErr)
			.isLength({ min: 1, max: 10 }),
		query("searchEmail")
			.trim()
			.notEmpty()
			.withMessage("Please enter email")
			.bail()
			.isEmail()
			.withMessage("Please enter valid Email"),
	],
	{
		errorType: "grouped",
		message: "At least one valid field must be provided",
	}
);

exports.usersSearchGet = [
	validateSearchUser,
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(400).render("createUser", {
				title: "create user",
				errors: errors.array(),
			});
			return;
		}
		next();
	},
	(req, res, next) => {
		const { searchFname: fName, searchEmail: email } = matchedData(req, {
			locations: ["query"],
		});
		const matchedUsers = usersStorage.searchUser({ fName, email });
		res.render("search", {
			title: "search result",
			matchedUsers,
			fName,
			email,
		});
	},
];
