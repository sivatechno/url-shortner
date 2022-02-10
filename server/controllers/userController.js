const mongoose = require('mongoose');
const Users = require('../models/usersModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userController = {
    getuser: async (req, res) => {
        const user = Users.find()
        res.json({ user })
    },
    create: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            const saltRounds = 10;
            const passwordHash = await bcrypt.hash(password, saltRounds);
            const user = await Users.findOne({ email })
            if (user) {
                res.json({ msg: "user already exists" })
                // console.log("user already exists")
            } else {
                if (!username || !email || !password) {
                    res.json({ msg: "please fill in these fields" })
                    // console.log({ msg: "please fill in these fields" })
                }
                else {
                    const UserData = new Users({
                        username,
                        email,
                        password: passwordHash
                    })
                    await UserData.save()
                    return res.json({ msg: "users succesfully added", UserData })
                }
            }

        } catch (error) {
            res.status(500).json({ msg: "user not added" })
            // console.log(error)
        }
    },
    signin: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email })
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    // const accessToken = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY)
                    var userToken = await jwt.sign({ id: user.id }, process.env.SECRET_KEY ,{expiresIn:"1d"});
                //    res.json("okay")
                    // const accessToken =await jwt.sign({_id:user._id}, "jsonwebtoken encryptiopn code", { expiresIn: "1d" })
                    // const { _id, username, email } = user;
                    res.status(200).json(userToken)

                }
                else {
                    res.status(500).json("password is incorrect")
                }
            } else {
                res.status(404).json("user not found")
            }
        } catch (error) {
            res.json(error)
        }
    }

}



module.exports = userController