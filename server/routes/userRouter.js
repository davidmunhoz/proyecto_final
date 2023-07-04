const express = require("express");

const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post("/register", userController.addUser)
userRouter.post("/login", userController.userLogin)




module.exports = userRouter