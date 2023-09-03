const express = require("express");
const dotenv =require("dotenv");
const logger = require('morgan');
const cors = require("cors");

const userRouter = require("./routes/userRouter");
const employmentRouter = require("./routes/employmentRouter")
const applicationRouter = require("./routes/applicationRouter")


dotenv.config()
const app = express();

app.use(cors());
app.use(logger('dev'))
app.use(express.json())
app.use("/user", userRouter)
app.use("/register",userRouter)
app.use("/path", userRouter)
app.use("/employment", employmentRouter)
app.use("/application", applicationRouter)


module.exports = app;