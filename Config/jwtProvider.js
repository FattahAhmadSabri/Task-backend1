const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");

// Load environment variables from .env file
dotenv.config(); 

// Retrieve secret key from environment variables
const jwtSecret = process.env.JWT_SECRET_KEY;

const generateToken = (userId) => {
  return jwt.sign({ userId }, jwtSecret, { expiresIn: "72h" });
};

const getUserIdFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    return decodedToken.userId;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = { generateToken, getUserIdFromToken };
