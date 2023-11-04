import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { addProfesor } from '../api/profesores.api';

export default function ProfesorForm() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
            console.log(params.id);
            /* await updateProfesor(params.id, data);
            navigate('/profesores');
            return; */
        }else{
            await addProfesor(data);
        }
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre" {...register("nombre", {required: true})} />
                {errors.nombre && <span>El nombre es requerido</span>}
                <input type="text" placeholder="Especialidad" {...register("especialidad", {required: true})} />
                {errors.especialidad && <span>La especialidad es requerida</span>}
                <input type="submit" /> 
            </form>
        </div>
    )
}