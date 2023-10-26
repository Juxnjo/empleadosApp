import { Router } from "express";
import { getEmpleados, createEmpleado, getEmpleado, updateEmpleado, deleteEmpleado } from "../controllers/empleados.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { formSchema } from "../schemas/auth.schema.js";

const router = Router()

router.get("/empleados", getEmpleados)

router.post("/empleados",validateSchema(formSchema), createEmpleado)

router.get("/empleados/:id", getEmpleado)

router.put("/empleados/:id",validateSchema(formSchema), updateEmpleado)

router.delete("/empleados/:id", deleteEmpleado)


export default router