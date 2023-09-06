const express = require("express");

const applicationController = require('../controllers/applicationController')

const applicationRouter = express.Router()
applicationRouter.post("/add", applicationController.addApplication);
applicationRouter.get("/getTrabajador/:trabajador", applicationController.getApplicationTrabajador);
applicationRouter.get("/getEmpresario/:empresario", applicationController.getApplicationEmpresario);

module.exports = applicationRouter;