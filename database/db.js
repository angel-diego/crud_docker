const mysql = require('mysql2');
const conexion = mysql.createConnection({
    //host     : 'localhost',
    host     : 'mysqlc',
    user     : 'root',
    password : 'root',
    database : 'crud_nodejs'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      console.log("sigue habiendo un error con la base de datos supongo.");
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;