const express = require("express");

const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post("/registerEmpresario", userController.addUserEmpresario)
userRouter.post("/loginEmpresario", userController.userLoginEmpresario)

userRouter.post("/registerTrabajador", userController.addUserTrabajador)
userRouter.post("/loginTrabajador", userController.userLoginTrabajador)

userRouter.get("/get/:id", userController.getTrabajador)




module.exports = userRouter