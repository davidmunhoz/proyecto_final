const express = require("express");

const employmentController = require('../controllers/employmentController')
const employmentQueries = require('../services/queries/employmentQueries')

const employmentRouter = express.Router()

employmentRouter.post("/add", employmentController.addEmployment)
employmentRouter.get(`/:provincia`, employmentController.getEmployment)
//employmentRouter.patch("/", employmentController.updateEmployment)
employmentRouter.delete("/", employmentController.deleteEmployment)


module.exports = employmentRouter
