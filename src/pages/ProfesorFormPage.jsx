import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfesor, addProfesor, removeProfesor, updateProfesor } from '../api/profesores.api';

export default function ProfesorFormPage() {

    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
            await updateProfesor(params.id, data);
            navigate('/profesores');
        }else{
            await addProfesor(data);
            navigate('/profesores');
        }
    })

    const onDelete = async () => {
        await removeProfesor(params.id);
        navigate('/profesores');
    }

    const onCancel = () => {
        navigate('/profesores');
    }

    const loadProfesor = async () => {
      const res = await getProfesor(params.id);
      setValue("nombre", res.data.nombre);
      setValue("especialidad", res.data.especialidad);
  }

    useEffect(() => {
        if(params.id){
            loadProfesor();
        }
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.nombre && <span>El nombre es requerido</span>}
                <input type="text" placeholder="Especialidad" {...register("especialidad", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.especialidad && <span>La especialidad es requerida</span>}
                <input type="submit" 
                className="bg-indigo-500 p-3 round-lg block w-full mt-3"
                /> 
            </form>

            <button onClick={onCancel}
            className="bg-gray-500 p-3 round-lg block w-full mt-3"
            >
              Cancelar
            </button>

          { params.id && 
            <button onClick={onDelete}
            className="bg-red-500 p-3 round-lg block w-full mt-3"
            >
              Borrar
            </button>
          }

        </div>
    )
}