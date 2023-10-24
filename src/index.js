import app from "./app.js";
import { conexionDB } from "./db.js";

conexionDB()
app.listen(8000)
console.log("Server en el puerto", 8000)