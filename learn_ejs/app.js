const express = require("express");
const path = require("path");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", (req, res) => res.render("index", { links, users }));

const myAge = 21; 
const myName = "Dheeraj";
const myProfession = "Student"

app.get("/about", (req, res) => res.render("about", {myName, myAge, myProfession, links}))


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
