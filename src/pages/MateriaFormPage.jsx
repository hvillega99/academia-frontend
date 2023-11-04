import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getMateria, addMateria, removeMateria, updateMateria } from '../api/materias.api';

export default function MateriaFormPage() {
  
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
            await updateMateria(params.id, data);
            navigate('/materias');
        }else{
            await addMateria(data);
            navigate('/materias');
        }
    })

    const onDelete = async () => {
        await removeMateria(params.id);
        navigate('/materias');
    }

    const onCancel = () => {
        navigate('/materias');
    }

    const loadMateria = async () => {
      const res = await getMateria(params.id);
      setValue("nombre", res.data.nombre);
      setValue("codigo", res.data.codigo);
  }

    useEffect(() => {
        if(params.id){
            loadMateria();
        }
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.nombre && <span>El nombre es requerido</span>}
                <input type="text" placeholder="Código" {...register("codigo", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.codigo && <span>El código es requerido</span>}
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
