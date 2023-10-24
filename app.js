import express from "express";
import morgan from "morgan";

const app = express();  

// Middleware para analizar el cuerpo de las solicitudes HTTP en formato JSON
app.use(express.json());

//Nos permite ver en consola las peticiones HTTP que hagan a nuestros servicios del API
app.use( morgan( 'dev' ) )

export default app