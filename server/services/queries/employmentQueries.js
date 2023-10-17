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
            empresario:(employmentData.empresario),
            fecha:(employmentData.fecha),
            jornadas:(employmentData.jornada),
           direccion:(employmentData.direccion),
           tipotrabajo:(employmentData.tipotrabajo),
           especialidad:(employmentData.especialidad),
           provincia:(employmentData.provincia)
           
        }

        return await db.query('INSERT INTO empleo SET ?', employmentDataObj, 'insert', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
}
                                        
employmentQueries.getEmploymentProvincia = async(provincia) =>{
let conn = null;

try{
 conn = await db.createConnection();           
 return await db.query('SELECT * FROM empleo WHERE provincia= ?', [provincia], 'select', conn) 

}catch(error){
    throw new Error (error.message)
}finally{
    conn && conn.end()
}
}

employmentQueries.getEmploymentID = async(id) =>{
    let conn = null;
    
    try{
     conn = await db.createConnection();           
     return await db.query('SELECT * FROM empleo where id= ?', [id], 'select', conn) 
    
    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
    }

    employmentQueries.getEmploymentEmpresario = async(empresario) =>{
        let conn = null;
        
        try{
         conn = await db.createConnection();           
         return await db.query('SELECT * FROM empleo where empresario= ?', [empresario], 'select', conn) 
        
        }catch(error){
            throw new Error (error.message)
        }finally{
            conn && conn.end()
        }
        }

        employmentQueries.getEmploymentTrabajador = async(id) =>{
            let conn = null;
      
            try {
              conn = await db.createConnection();
              const query = `
              SELECT empleo.* 
              FROM trabajador
              INNER JOIN solicitud ON solicitud.trabajador = trabajador.id
              INNER JOIN empleo ON solicitud.empleo = empleo.id
              WHERE trabajador.id= ?`;
          
              const result = await db.query(query, [id], 'select', conn);
              return result;
            } catch (error) {
              throw new Error(error.message);
            } finally {
              conn && conn.end();
            }
            }

        employmentQueries.deleteEmployment = async(id) =>{
            let conn = null;
            
            try{
             conn = await db.createConnection();           
             return await db.query('DELETE FROM empleo where id= ?', [id], 'delete', conn) 
            
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
           direccion:(employmentData.direccion),
           tipotrabajo:(employmentData.tipotrabajo),
           especialidad:(employmentData.especialidad),
           provincia:(employmentData.provincia)
           
        }

        return await db.query('UPDATE empleo SET =?', employmentDataObj, 'update', conn)

    }catch(error){
        throw new Error (error.message)
    }finally{
        conn && conn.end()
    }
}

module.exports = employmentQueries