//import { useForm } from "react-hook-form";

function FormPage ()
{
    return (
        <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
            <form action="" className="bg-purple-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-xl font-semibold">Formulario</h1>
                <br />
                <div className="">
                    <label htmlFor="">Nombre completo *</label>
                    <input type="text" />
                </div>
                <div className="">
                    <label htmlFor="">Correo electronico *</label>
                    <input type="email" />
                </div>
                <div className="">
                    <div className="">
                        <label htmlFor="">Sexo *</label>
                        <div className="">
                            <input type="radio" />
                            <label htmlFor="">Masculino</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Femenino</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Area *</label>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Descripcion *</label>
                        <textarea type="text" name="" id="" />
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label htmlFor="">Deseo recibir boletin informativo</label>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Roles *</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Dev</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">QA</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">BA</label>
                        </div>

                    </div>
                </div>
                <button type="submit">Guardar</button>
            </form>

        </div>
    )
}

export default FormPage