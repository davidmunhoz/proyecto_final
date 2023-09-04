const employmentQueries = require("../queries/employmentQueries")

const employmentDao = {}

employmentDao.addEmployment = async(employmentData) => await employmentQueries.addEmployment(employmentData);
employmentDao.getEmploymentProvincia = async(employmentData) => await employmentQueries.getEmploymentProvincia(employmentData);
employmentDao.getEmploymentID = async(employmentData) => await employmentQueries.getEmploymentID(employmentData);
employmentDao.deleteEmployment = async(employmentData) => await employmentQueries.deleteEmployment(employmentData);




module.exports = employmentDao;