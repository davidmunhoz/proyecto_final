const employmentDao = require("../services/dao/employmentDao");

const employmentController = {}

employmentController.addEmployment = async (req,res) =>{
    const {titulo,descripcion,salario,jornadas,vacante,direccion,tipotrabajo,especialidad,provincia,fecha} = req.body;

    if(!titulo|| !descripcion || !salario || !jornadas || !vacante || !direccion || !provincia || !tipotrabajo || !especialidad || !fecha){
        return res.status(400).send({message: " Faltan campos a rellenar"})
    }

    try{
        const employment = await employmentDao.addEmployment(req.body)
        if(employment){
            return res.status(200).send({message: "Empleo añadido correctamente"})
        }
        
    }catch(error){
        res.status(500).send({message: error.message})
    }
}

employmentController.getEmploymentProvincia = async (req, res) => {
    const { provincia } = req.params;
  
    try {
        const employment = await employmentDao.getEmploymentProvincia(provincia);
  
      if (employment.length === 0) {
        return res.status(404).send({ message: "Empleos no encontrados" });
      }
  
      return res.send({ employment });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
  employmentController.getEmploymentID = async (req, res) => {
  
    const { id } = req.params;
    try {
       const employment = await employmentDao.getEmploymentID(id);
  
      if (employment.length === 0) {
        return res.status(404).send({ message: "Empleos no encontrados" });
      }
  
      return res.send({ employment });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  employmentController.getEmploymentEmpresario = async (req, res) => {
  
    const { empresario } = req.params;
    try {
       const employment = await employmentDao.getEmploymentEmpresario(empresario);
  
      if (employment.length === 0) {
        return res.status(404).send({ message: "Empleos no encontrados" });
      }
  
      return res.send({ employment });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  employmentController.getEmploymentTrabajador = async (req, res) => {
  
    const { trabajador } = req.params;
    try {
       const employment = await employmentDao.getEmploymentTrabajador(trabajador);
  
      if (employment.length === 0) {
        return res.status(404).send({ message: "Empleos no encontrados" });
      }
  
      return res.send({ employment });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };


//employmentController.updateEmployment = async (req, res)  =>{ }


employmentController.deleteEmployment = async (req, res) =>{ 

    const  { id } = req.params;

    try{    const employment = await employmentDao.deleteEmployment(id);
      // Si no encuentra el guid (retorna -1 si no existe) respondemos con un 404 (not found)
      if (id === -1) return res.status(404).send('La cuenta no existe');
      // Eliminamos el índice de ese usuario del array
      // Enviamos simplemente una respuesta
      res.send('Empleo eliminado');
    }catch(error){
      res.status(500).send({ message: error.message });
    }

}


module.exports = employmentController;