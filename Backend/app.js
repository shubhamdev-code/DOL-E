const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/User");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://shubhamkrs:L91j5ypHpXzFDni5@users.vpncai5.mongodb.net/?retryWrites=true&w=majority&appName=users");

app.post("/login", async (req, res) => {
    const { email, pwd } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (user) {
            const passwordMatch = await bcrypt.compare(pwd, user.pwd);

            if (passwordMatch) {
                res.json(user);
            } else {
                res.status(401).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/register", async (req, res) => {
    const { email, pwd } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        console.log(pwd, salt)
        const hashedPwd = await bcrypt.hash(pwd, salt);

        const newUser = new userModel({
            email: email,
            password: hashedPwd
        });
        console.log(newUser)
        const user = await newUser.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
