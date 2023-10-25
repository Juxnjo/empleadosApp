import data from "../db.js";

export const getEmpleados =  ( req, res ) =>
{
    const getData = "SELECT * FROM empleado"
    data.query(getData, (error, results) => {
        if (error) {
            console.error('Error: ', error);
            res.status(500).json({ error: 'Error:' });
        }
        res.status(200).json(results)
    })

}

