const express = require("express");
const { register, login } = require("../Controller/authController");

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

module.exports= router