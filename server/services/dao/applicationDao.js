const applicationQueries = require("../queries/applicationQueries")

const applicationDao = {}

applicationDao.addApplication = async(applicationData) => await applicationQueries.addApplication(applicationData);
applicationDao.getApplicationTrabajador = async(applicationData) => await applicationQueries.getApplicationTrabajador(applicationData);
applicationDao.getApplicationEmpresario = async(applicationData) => await applicationQueries.getApplicationEmpresario(applicationData);


module.exports = applicationDao;