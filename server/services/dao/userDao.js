const userQueries = require("../queries/userQueries")

const userDao = {}

userDao.addUserEmpresario = async(userData) => await userQueries.addUserEmpresario(userData);
userDao.loginUserEmpresario =async(email) => await userQueries.getUserbyEmailEmpresario(email);

userDao.addUserTrabajador = async(userData) => await userQueries.addUserTrabajador(userData);
userDao.loginUserTrabajador =async(email) => await userQueries.getUserbyEmailTrabajador(email);

userDao.getTrabajador = async(id) => await userQueries.getTrabajador(id);
userDao.getEmpresario = async(id) => await userQueries.getEmpresario(id);


module.exports = userDao;