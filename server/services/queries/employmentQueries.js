const db = require("../mysqlConfig")

const employmentQueries = {}


employmentQueries.addEmployment = async (employmentData) =>{
    let conn = null;

    try{
        conn = await db.createConnection()

        const employmentDataObj = {
           titulo:(employmentData.titulo),
            descripcion:(employmentData.descripcion),
            salario: (employmentData.salario),
            vacante:(employmentData.vacante),
            jornadas:(employmentData.jornada),
           direccion:(employmentData.direccion)
           
        } 

        return await db.query('INSERT INTO empleo SET =?', employmentDataObj, 'insert', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
}
                                        
employmentQueries.getEmployment = async(titulo) =>{
let conn = null;

try{
 conn = await db.createConnection();           
 return await db.query('SELECT * FROM empleo WHERE titulo= ?', titulo, 'select', conn) 

}catch(error){
    throw new Error (error.message)
}finally{
    conn && conn.end()
}
}


employmentQueries.updateEmployment = async (employmentData) =>{
    let conn = null;

    try{
        conn = await db.createConnection()

        const employmentDataObj = {
           titulo:(employmentData.titulo),
            descripcion:(employmentData.descripcion),
            salario: (employmentData.salario),
            vacante:(employmentData.vacante),
            jornada:(employmentData.jornada),
           direccion:(employmentData.direccion)
           
        }

        return await db.query('UPDATE empleo SET =?', employmentDataObj, 'update', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
}

module.exports = employmentQueries