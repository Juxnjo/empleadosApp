import { Router } from "express";
import { getEmpleados, createEmpleado, getEmpleado, updateEmpleado, deleteEmpleado } from "../controllers/empleados.controller.js";

const router = Router()

router.get("/empleados", getEmpleados)

router.post("/empleados", createEmpleado)

router.get("/empleados/:id", getEmpleado)

router.put("/empleados/:id", updateEmpleado)

router.delete("/empleados/:id", deleteEmpleado)


export default router