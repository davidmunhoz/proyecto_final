const db = require("../mysqlConfig")

const applicationQueries = {}


applicationQueries.addApplication = async (employmentData) =>{
    let conn = null;

    try{
        conn = await db.createConnection()

        const employmentDataObj = {
           trabajador:(employmentData.trabajador),
            empleo:(employmentData.empleo),
            empresario:(employmentData.empresario)
           
        }

        return await db.query('INSERT INTO solicitud SET ?', employmentDataObj, 'insert', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
}
                                        
applicationQueries.getApplicationTrabajador = async(trabajador) =>{
let conn = null;

try{
 conn = await db.createConnection();           
 return await db.query('SELECT * FROM solicitud WHERE trabajador= ?', [trabajador], 'select', conn) 

}catch(error){
    throw new Error (error.message)
}finally{
    conn && conn.end()
}
}

applicationQueries.getApplicationEmpresario = async(empresario) =>{
    let conn = null;
    
    try{
     conn = await db.createConnection();           
     return await db.query('SELECT * FROM solicitud WHERE empresario= ?', [empresario], 'select', conn) 
    
    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
    }

module.exports = applicationQueries;