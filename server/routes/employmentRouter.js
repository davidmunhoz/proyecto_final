const express = require("express");

const employmentController = require('../controllers/employmentController')

const employmentRouter = express.Router()

employmentRouter.post("/add", employmentController.addEmployment)

employmentRouter.get(`/get/:provincia`, employmentController.getEmploymentProvincia)
employmentRouter.get(`/getid/:id`, employmentController.getEmploymentID)
employmentRouter.get(`/getEmpresario/:empresario`, employmentController.getEmploymentEmpresario)
employmentRouter.get(`/getTrabajador/:trabajador`, employmentController.getEmploymentTrabajador)

//employmentRouter.patch("/", employmentController.updateEmployment)
employmentRouter.delete("/delete/:id", employmentController.deleteEmployment)


module.exports = employmentRouter
