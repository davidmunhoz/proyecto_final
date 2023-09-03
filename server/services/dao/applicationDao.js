const applicationQueries = require("../queries/applicationQueries")

const applicationDao = {}

applicationDao.addApplication = async(applicationData) => await applicationQueries.addApplication(applicationData);
applicationDao.getApplication = async(applicationData) => await applicationQueries.getApplication(applicationData);


module.exports = applicationDao;