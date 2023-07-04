const employmentDao = require("../services/dao/employmentDao");

const employmentController = {}

employmentController.addEmployment = async (req,res) =>{
    const {titulo,salario,jornadas,vacante,direccion} = req.body;

    if( !titulo || !salario || !jornadas || !vacante || !direccion){
        return res.status(400).send({message: " Email and Password is required"})
    }

    try{
        const employment = await employmentDao.addEmployment(req.body)
        console.log(employment);

        if(employment.length > 0){
            return res.status(204).send({message: "employment already exits"})
        }
        const addEmployment = await employmentDao.addEmployment(req.body)
        if(addEmployment){
            return res.status(201).send({message: "employment added succesfully"})
        }
    }catch(error){
        res.status(500).send({message: error.message})
    }
}

employmentController.getEmployment = async (req,res) =>{
    const { provincia } = req.params;

    if(!provincia){
        return res.status(400).send({message: "Provincia necesaria"})
    }

    try{
        const employment = await employmentDao.getEmployment(provincia)
        if(employment.length === 0){
            return res.status(404).send({message: "Provincia no encontrada"})
        }
       return res.send({employment})

       
    }catch(error){
        res.status(500).send({message: error.message})
    }
}

//employmentController.updateEmployment = async (req, res)  =>{ }


employmentController.deleteEmployment = async (req, res) =>{ 


    const  { id } = req.params;
    const employment = await employment.findById(id);
    // Si no encuentra el guid (retorna -1 si no existe) respondemos con un 404 (not found)
    if (id === -1) return res.status(404).send('La cuenta no existe');
    // Eliminamos el índice de ese usuario del array
    await employment.deleteOne();
    // Enviamos simplemente una respuesta
    res.send('Empleo eliminado');


}


module.exports = employmentController;