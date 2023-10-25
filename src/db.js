import mysql from 'mysql'

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba_tecnica_dev'
} );

// Crea una conexión a la base de datos
connection.connect( ( err ) =>
{
    if ( err )
    {
        console.error( 'Error de conexión: ', err );
        return;
    }

    console.log( '>>> Conectado a la BD!', );

} )

export default connection
