const md5 = require("md5");
const db = require("../mysqlConfig");

const userQueries = {};

userQueries.addUserEmpresario = async (userData) => {
  let conn = null;

  try {
    conn = await db.createConnection();

    const userDataObj = {
      nombre: userData.nombre,
      email: userData.email,
      password: md5(userData.password),
      telefono: userData.telefono,
      direccion: userData.direccion,
      descripcion: userData.descripcion,
      imagen: userData.imagen,
      cif: userData.cif,
    };

    return await db.query(
      "INSERT INTO empresario SET ?",
      userDataObj,
      "insert",
      conn
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

userQueries.addUserTrabajador = async (userData) => {
  let conn = null;

  try {
    conn = await db.createConnection();

    const userDataObj = {
      nombre: userData.nombre,
      email: userData.email,
      password: md5(userData.password),
      telefono: userData.telefono,
      direccion: userData.direccion,
      imagen: userData.imagen,
      experiencia: userData.experiencia,
      carnet: userData.carnet,
      coche: userData.coche,
    };

    return await db.query(
      "INSERT INTO trabajador SET ?",
      userDataObj,
      "insert",
      conn
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

userQueries.getUserbyEmailEmpresario = async (email) => {
  let conn = null;

  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM empresario WHERE email= ?",
      email,
      "select",
      conn
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

userQueries.getUserbyEmailTrabajador = async (email) => {
  let conn = null;

  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM trabajador WHERE email= ?",
      email,
      "select",
      conn
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

userQueries.getTrabajadorbyIdEmpresario = async (id) => {
  let conn = null;

  try {
    conn = await db.createConnection();
    const query = `         
            SELECT trabajador.*
FROM empresario
INNER JOIN solicitud ON empresario.id = solicitud.empresario
INNER JOIN trabajador ON trabajador.id = solicitud.trabajador
WHERE empresario.id = ?;`;

    const result = await db.query(query, [id], "select", conn);
    return result;
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

userQueries.getEmpresario = async (id) => {
  let conn = null;

  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM empresario WHERE id= ?",
      id,
      "select",
      conn
    );
  } catch (error) {
    throw new Error(error.message);
  } finally {
    conn && conn.end();
  }
};

module.exports = userQueries;
