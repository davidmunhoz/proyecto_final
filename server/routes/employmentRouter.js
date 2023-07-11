const express = require("express");

const employmentController = require('../controllers/employmentController')

const employmentRouter = express.Router()

employmentRouter.post("/add", employmentController.addEmployment)
employmentRouter.get(`/get/:provincia`, employmentController.getEmployment)
//employmentRouter.patch("/", employmentController.updateEmployment)
employmentRouter.delete("/", employmentController.deleteEmployment)


module.exports = employmentRouter
