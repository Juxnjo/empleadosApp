import express from "express";
import morgan from "morgan";

import empleadoRoutes from "./routes/empleado.routes.js";

const app = express();  

// Middleware para analizar el cuerpo de las solicitudes HTTP en formato JSON
app.use(express.json());

//Nos permite ver en consola las peticiones HTTP que hagan a nuestros servicios del API
app.use( morgan( 'dev' ) )

app.use("/api", empleadoRoutes)

export default app