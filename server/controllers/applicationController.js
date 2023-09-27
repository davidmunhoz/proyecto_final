const applicationDao = require("../services/dao/applicationDao")

const applicationController = {}

applicationController.addApplication = async (req, res) => {
    const { trabajador, empleo, empresario } = req.body;

    if (!trabajador || !empleo || !empresario) {
        return res.status(400).send({ message: "Faltan campos a rellenar" })
    }

    try {
        const existingApplication = await applicationDao.findApplication(trabajador, empleo, empresario);
        console.log(existingApplication)
        if(existingApplication.length !== 0){
            return res.status(400).send({ message: "Solicitud ya existente" })
        }else{
            const application = await applicationDao.addApplication(req.body);
            if (application) {
                return res.status(200).send({ message: "Solicitud Añadida" })
            }
        }
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

applicationController.getApplicationTrabajador = async (req, res) => {
    const { trabajador } = req.params;

    try {
        const application = await applicationDao.getApplicationTrabajador(trabajador);

        if (application.length === 0) {
            return res.status(404).send({ message: "Solicitud no encontrada" });
        }

        return res.send({ application });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

applicationController.getApplicationEmpresario = async (req, res) => {
    const { empresario } = req.params;

    try {
        const application = await applicationDao.getApplicationEmpresario(empresario);

        if (application.length === 0) {
            return res.status(404).send({ message: "Solicitud no encontrada" });
        }

        return res.send({ application });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

  
applicationController.deletebyEmpleo = async (req, res) =>{ 

    const  { empleo } = req.params;

    try{    const employment = await applicationDao.deletebyEmpleo(empleo);
      // Si no encuentra el guid (retorna -1 si no existe) respondemos con un 404 (not found)
      if (id === -1) return res.status(404).send('La solicitud no existe');
      // Eliminamos el índice de ese usuario del array
      // Enviamos simplemente una respuesta
      res.send('Empleo eliminado');
    }catch(error){
      res.status(500).send({ message: error.message });
    }

}


module.exports = applicationController;
