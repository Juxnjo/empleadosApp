import { useForm } from "react-hook-form";

function FormPage ()
{

    const { register, handleSubmit } = useForm()

    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <h1 className="text-xl font-semibold text-center my-2">Formulario</h1>
            <form onSubmit={ handleSubmit( ( values ) =>
            {
                console.log( values )
            } ) }>
                <input type="text" { ...register( "nombre", { required: true } ) } className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Nombre completo *" />
                <input type="email" { ...register( "email", { required: true } ) } className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Email *" />

                <label htmlFor="">Sexo *</label>
                <input type="radio" { ...register( "sexo", { required: true } ) } />
                <label htmlFor="">Masculino</label>
                <input type="radio" { ...register( "sexo", { required: true } ) } />
                <label htmlFor="">Femenino</label>

                <select name="" id="" { ...register( "area_id", { required: true } ) } className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" >
                    <option defaultChecked></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <textarea type="text" name="" id="" { ...register( "descripcion", { required: true } ) } className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="Descripcion" />

                <div className="my-2 ">
                    <input type="checkbox" { ...register( "boletin", { required: false } ) } />
                    <label htmlFor="" className="mx-2">Deseo recibir boletin informativo</label>
                </div>
                <div className="flex ">
                    <label htmlFor="">Roles *</label>
                    <input type="checkbox" { ...register( "rol_id", { required: true } ) } />
                    <label htmlFor="">Dev</label>
                    <input type="checkbox" { ...register( "rol_id", { required: true } ) } />
                    <label htmlFor="">Dev</label>
                    <input type="checkbox" { ...register( "rol_id", { required: true } ) } />
                    <label htmlFor="">Dev</label>
                </div>

                <button type="submit">Guardar</button>

            </form>

        </div>


    )
}

export default FormPage