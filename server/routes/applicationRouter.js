const express = require("express");

const applicationController = require('../controllers/applicationController')

const applicationRouter = express.Router()
applicationRouter.post("/add", applicationController.addApplication);
applicationRouter.get("/get/:trabajador", applicationController.getApplication);

module.exports = applicationRouter;