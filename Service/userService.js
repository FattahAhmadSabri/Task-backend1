const User = require("../Model/user_Model");
const bcrypt = require("bcrypt");

// Create User (Service)
const createUser = async ({ name, email, mobile, password }) => {
    const isEmailExist = await User.findOne({ email });
    const isMobileExist = await User.findOne({ mobile });

    if (isEmailExist) {
        throw new Error("Email already exists");
    }

    if (isMobileExist) {
        throw new Error("Mobile number already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, mobile, password: hashedPassword });
    await newUser.save();
    return newUser;
};

// Get User by Email
const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

module.exports = { createUser, getUserByEmail };
