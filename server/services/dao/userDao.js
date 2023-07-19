const userQueries = require("../queries/userQueries")

const userDao = {}

userDao.addUser = async(userData) => await userQueries.addUser(userData);
userDao.loginUser =async(email) => await userQueries.getUserbyEmail(email);
userDao.getUser = async(userData) => await userQueries.getUser(userData);

module.exports = userDao;