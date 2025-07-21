const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Welsome to Home Page"));
indexRouter.get("/about", (req, res) => res.send("Welcome to About Page"));
indexRouter.get("/contact", (req, res) => res.send("GET, Contact Page"));
indexRouter.post("/contact", (req, res) => res.send("POST, Contact page"));

module.exports = indexRouter;
