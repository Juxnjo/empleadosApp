//import { useForm } from "react-hook-form";

function FormPage ()
{
    return (
        <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
            <form action="" className="bg-purple-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-xl font-semibold">Formulario</h1>
                <br />
                <div className="space-x-10">
                    <label htmlFor="">Nombre completo *</label>
                    <input type="text" />
                </div>
                <div className="space-x-10 space-y-5">
                    <label htmlFor="">Correo electronico *</label>
                    <input type="email" />
                </div>
                <div className="space-x-10 space-y-5">
                    <label htmlFor="">Sexo *</label>
                    
                </div>
            </form>
        </div>
    )
}

export default FormPage