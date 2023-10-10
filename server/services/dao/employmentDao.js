const employmentQueries = require("../queries/employmentQueries")

const employmentDao = {}

employmentDao.addEmployment = async(employmentData) => await employmentQueries.addEmployment(employmentData);

employmentDao.getEmploymentProvincia = async(employmentData) => await employmentQueries.getEmploymentProvincia(employmentData);
employmentDao.getEmploymentID = async(employmentData) => await employmentQueries.getEmploymentID(employmentData);
employmentDao.getEmploymentEmpresario = async(employmentData) => await employmentQueries.getEmploymentEmpresario(employmentData);
employmentDao.getEmploymentTrabajador = async(id) => await employmentQueries.getEmploymentTrabajador(id);

employmentDao.deleteEmployment = async(employmentData) => await employmentQueries.deleteEmployment(employmentData);




module.exports = employmentDao;