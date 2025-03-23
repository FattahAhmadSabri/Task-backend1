const { createUser, getUserByEmail } = require('../Service/userService');
const jwtProvider = require('../Config/jwtProvider');
const bcrypt = require("bcrypt");

// Register Controller
const register = async (req, res) => {
    try {
        const user = await createUser(req.body);
        console.log(user)
        const token = jwtProvider.generateToken(user._id);
        return res.status(201).send({ token, message: "Register successful" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Login Controller
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: `User not found with email: ${email}` });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid password" });
        }

        const token = jwtProvider.generateToken(user._id);
        return res.status(200).send({ token, message: "Login successful" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = { register, login };
