import { z } from "zod";

export const formSchema = z.object({
    nombre: z.string({
        required_error:'nombre es requerido',
    }), 
    email: z.string({
        required_error: 'email es requerido'
    }).email({
        message: 'email invalido'
    }), 
    sexo: z.string({
        required_error: 'sexo es requerido'
    }), 
    area_id: z.number({
        required_error: 'area es requerida'
    }), 
    descripcion: z.string({
        required_error: 'descripcion es requerida'
    }).max(20, {
        message: 'deben ser maximo 20 caracteres'
    })
})