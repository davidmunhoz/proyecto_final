const express = require("express");

const applicationController = require('../controllers/applicationController')

const applicationRouter = express.Router()
applicationRouter.post("/add", applicationController.addApplication);
applicationRouter.get("/get/:id/:id", applicationController.getApplication);

module.exports = applicationRouter;