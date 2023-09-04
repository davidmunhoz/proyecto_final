const applicationDao = require("../services/dao/applicationDao")

const applicationController = {}

applicationController.addApplication = async (req, res) => {
    const { trabajador, empleo, empresario } = req.body;

    if (!trabajador || !empleo || !empresario) {
        return res.status(400).send({ message: "Faltan campos a rellenar" })
    }

    try {
        const application = await applicationDao.addApplication(req.body);
        if (application) {
            return res.status(200).send({ message: "Solicitud Añadida" })
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

applicationController.getApplication = async (req, res) => {
    const { trabajador } = req.params;

    try {
        const application = await applicationDao.getApplication(trabajador);

        if (application.length === 0) {
            return res.status(404).send({ message: "Solicitud no encontrada" });
        }

        return res.send({ application });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

  

module.exports = applicationController;
