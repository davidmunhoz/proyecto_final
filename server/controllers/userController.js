const jwt = require('jsonwebtoken');
const md5 = require('md5')

const userDao = require("../services/dao/userDao");
const employmentDao = require("../services/dao/employmentDao");
const applicationDao = require("../services/dao/applicationDao");

const userController = {}


userController.addUserEmpresario = async (req,res) =>{
    const {nombre, email,password} = req.body;

    if(!nombre || !email || !password){
        return res.status(400).send({message: " Email y Password son necesarios"})
    }

    try{
        const user = await userDao.loginUserEmpresario(req.body.email)
        console.log(user);

        if(user.length > 0){
            return res.status(204).send({message: "Usuario existente"})
        }
        const addUser = await userDao.addUserEmpresario(req.body)

        if(addUser){
            return res.status(201).send({message: "Usuario Empresario añadido"})
        }
    }catch(error){
        res.status(500).send({message: error.message})
    }
}

userController.addUserTrabajador = async (req,res) =>{
    const {nombre, email,password} = req.body;

    if(!nombre || !email || !password){
        return res.status(400).send({message: " Email y Password son necesarios"})
    }

    try{
        const user = await userDao.loginUserTrabajador(req.body.email)
        console.log(user);

        if(user.length > 0){
            return res.status(204).send({message: "Usuario existente"})
        }
        const addUser = await userDao.addUserTrabajador(req.body)

        if(addUser){
            return res.status(201).send({message: "Usuario Trabajador añadido"})
        }
    }catch(error){
        res.status(500).send({message: error.message})
    }
}



userController.userLoginEmpresario = async (req,res) =>{
    let empleado;
    const { email,password } = req.body
    const { trabajador, empresario} = req.body
    const { empleo } = req.body

    if(!email || !password){
        return res.status(400).send({message: "Email and Password is necessary"})
    }

    try{
        const user = await userDao.loginUserEmpresario(email)
        const application = await applicationDao.getApplication(trabajador,empresario)
        const employment = await employmentDao.getEmployment(empleo)

        if(trabajador === user.id && empresario === application.empresario ){
            empleado = employment
        }

        if(user.length === 0){
            return res.status(404).send({message: "Usuario no encontrado"})
        }

        const [userData] = user; // Extraer el primer resultado de la lista de usuarios
    const userPassword = md5(password);

    if (userData.password !== userPassword) {
      return res.status(401).send({ message: "Contraseña incorrecta" });
    }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        console.log(token)
        console.log(empleado)
        return res.status(200).send({token,user,empleado})

    }catch(error){
        res.status(500).send({message: error.message})
    }
}


userController.userLoginTrabajador = async (req,res) =>{
    const { email,password } = req.body

    if(!email || !password){
        return res.status(400).send({message: "Email and Password is necessary"})
    }

    try{
        const user = await userDao.loginUserTrabajador(email)
        
        if(user.length === 0){
            return res.status(404).send({message: "Usuario no encontrado"})
        }

        const [userData] = user; // Extraer el primer resultado de la lista de usuarios
    const userPassword = md5(password);

    if (userData.password !== userPassword) {
      return res.status(401).send({ message: "Contraseña incorrecta" });
    }
    
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:'1h'})
        console.log(token)
        return res.status(200).send({token,user})

    }catch(error){
        res.status(500).send({message: error.message})
    }
}



module.exports = userController;