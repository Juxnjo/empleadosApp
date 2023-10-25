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
        res.status( 200 ).json( rows )
        //console.log( 'Resultados: ', rows );
    } );
}

export const createEmpleado = ( req, res ) =>
{
    const { nombre, email, sexo, area_id, boletin, descripcion } = req.body

    const postData = 'INSERT INTO empleado (nombre, email, sexo, area_id, boletin, descripcion) VALUES (?, ?, ?, ?, ?, ?)'

    const dataValue = 'SELECT * FROM empleado WHERE nombre = ?';

    data.query( postData, [ nombre, email, sexo, area_id, boletin, descripcion ], ( err ) =>
    {
        if ( err )
        {
            console.error( 'Error al realizar la consulta: ', err );
            res.status( 500 ).json( { error: 'Error' } );
            return;
        }
        // Consultar el usuario recién insertado
        data.query( dataValue, [ nombre ], ( err, rows ) =>
        {
            if ( err )
            {
                console.error( 'Error al realizar la consulta de selección: ', err );
                res.status( 500 ).json( { error: 'Error' } );
                return;
            }

            // Mostrar el usuario en la consola
            console.log( 'Empleado agregado correctamente:', rows[ 0 ] );

            res.status( 201 ).json( { message: 'Empleado agregado correctamente' } );

        } )
    } )
}

export const getEmpleado = ( req, res ) =>
{

    const empleadoId = req.params.id
    const getData = "SELECT * FROM empleado WHERE id = ?"

    data.query( getData, [ empleadoId ], ( err, rows ) =>
    {
        if ( err )
        {
            console.error( 'Error al realizar la consulta: ', err );
            res.status( 500 ).json( { error: 'Error' } );
            return
        }// Verificar si se encontró el empleado
        if ( rows.length === 0 )
        {
            res.status( 404 ).json( { error: 'Empleado no encontrado' } );
        } {
            // Si se encontró el empleado, devolverlo como respuesta
            res.status( 200 ).json( rows[ 0 ] );
        }

    } )
}

export const updateEmpleado = ( req, res ) =>
{
    const empleadoId = req.params.id; // Obtén el ID del empleado de los parámetros de la URL
    const { nombre, email, sexo, area_id, boletin, descripcion } = req.body;

    const putData = 'UPDATE empleado SET nombre=?, email=?, sexo=?, area_id=?, boletin=?, descripcion=? WHERE id=?';

    data.query( putData, [ nombre, email, sexo, area_id, boletin, descripcion, empleadoId ], ( err, rows ) =>
    {
        if ( err )
        {
            console.error( 'Error al realizar la consulta de actualización: ', err );
            res.status( 500 ).json( { error: 'Error' } );
            return;
        }

        // Verificar si el empleado fue encontrado y actualizado correctamente
        if ( rows.affectedRows === 0 )
        {
            res.status( 404 ).json( { error: 'Empleado no encontrado' } );
        } else
        {
            res.status( 200 ).json( { message: 'Empleado actualizado correctamente' } );
        }
    } );
};

export const deleteEmpleado = ( req, res ) =>
{
    const empleadoId = req.params.id; // Obtén el ID del parámetro de la URL

    const deleteData = 'DELETE FROM empleado WHERE id = ?';

    data.query( deleteData, [ empleadoId ], ( err, rows ) =>
    {
        if ( err )
        {
            console.error( 'Error al realizar la consulta de eliminación: ', err );
            res.status( 500 ).json( { error: 'Error' } );
            return;
        }

        // Verificar si se eliminó el empleado
        if ( rows.affectedRows === 0 )
        {
            res.status( 404 ).json( { error: 'Empleado no encontrado' } );
        } else
        {
            // Si se eliminó el empleado, devolver un mensaje de éxito
            res.status( 200 ).json( { message: 'Empleado eliminado correctamente' } );
        }
    } );
};
