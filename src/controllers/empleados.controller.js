import data from "../db.js";

export const getEmpleados = ( req, res ) =>
{   
    const getData = 'SELECT * FROM empleado'
    data.query( getData, ( err, rows ) =>
    {
        if ( err )
        {
            console.error( 'Error al realizar la consulta: ', err );
            res.status( 500 ).json( { error: 'Error' } )
            return;
        }
        res.status(200).json(rows)
        console.log( 'Resultados: ', rows );
    } );
}


