import mongoose from "mongoose";

export const conexionDB = async () => {
    try {
        await mongoose.connect( 'mongodb://127.0.0.1/empleadosList' )
        console.log(">>> Base de datos conectada <<<")
    } catch (error) {
        console.log(error)
        
    }
}