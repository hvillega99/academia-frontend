import { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getAula, addAula, removeAula, updateAula } from '../api/aulas.api';
import { getMaterias } from '../api/materias.api';
import { getProfesores } from '../api/profesores.api';

export default function AulaFormPage() {

  const [materiaOptions, setMateriaOptions] = useState([]);
  const [materiaSelected, setMateriaSelected] = useState(null);

  const [profesorOptions, setProfesorOptions] = useState([]);
  const [profesorSelected, setProfesorSelected] = useState(null);

  const {register, handleSubmit, formState:{errors}, setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
      if(params.id){
          await updateAula(params.id, data);
          navigate('/aulas');
      }else{
          await addAula(data);
          navigate('/aulas');
      }
  })

  const onDelete = async () => {
      await removeAula(params.id);
      navigate('/aulas');
  }

  const onCancel = () => {
      navigate('/aulas');
  }

  const loadAula = async () => {
    const res = await getAula(params.id);
    setMateriaSelected(res.data.materia);
    setProfesorSelected(res.data.profesor);
    setValue("materia", res.data.materia);
    setValue("profesor", res.data.profesor);
    setValue("tema", res.data.tema);
    setValue("fecha", res.data.fecha);
    setValue("hora", res.data.hora);
}

const loadOptions = async () => {
  const res = await getMaterias();
  const materiaData = res.data;
  setMateriaOptions(materiaData);

  const res2 = await getProfesores();
  const profesorData = res2.data;
  setProfesorOptions(profesorData);
}

  useEffect(() => {
    if(params.id){
      loadAula();
    }
    loadOptions();
  }, [])

  return (
      <div className="max-w-xl mx-auto">
          <form onSubmit={onSubmit}>

          <input type="text" placeholder="Tema" {...register("tema", {required: true})} 
          className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
          {errors.tema && <span>El tema es requerido</span>}

          <select {...register("materia", { required: true })} className="bg-gray-200 p-3 rounded-lg block w-full mb-3">
            {!materiaSelected && <option value="">Seleccionar materia</option>}
            {materiaOptions.map((option, index) => (
              <option key={index} value={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
          {errors.materia && <span>La materia es requerida</span>}

          <select {...register("profesor", { required: true })} className="bg-gray-200 p-3 rounded-lg block w-full mb-3">
            {!profesorSelected && <option value="">Seleccionar profesor</option>}
            {profesorOptions.map((option, index) => (
              <option key={index} value={option.id}>
                {option.nombre}
              </option>
            ))}
          </select>
          {errors.materia && <span>La materia es requerida</span>}

              <div className="flex justify-between py-3">
                <input type="date" placeholder="Fecha" {...register("fecha", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.fecha && <span>La fecha es requerido</span>}

                <input type="time" placeholder="Hora" {...register("hora", {required: true})} 
                className="bg-gray-200 p-3 rounded-lg block w-full mb3"/>
                {errors.hora && <span>La hora requerida</span>}
              </div>

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
