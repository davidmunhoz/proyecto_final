const express = require("express");

const employmentController = require('../controllers/employmentController')

const employmentRouter = express.Router()

employmentRouter.post("/add", employmentController.addEmployment)
employmentRouter.get(`/get/:provincia`, employmentController.getEmploymentProvincia)
employmentRouter.get(`/getid/:id`, employmentController.getEmploymentID)
//employmentRouter.patch("/", employmentController.updateEmployment)
employmentRouter.delete("/", employmentController.deleteEmployment)


module.exports = employmentRouter
