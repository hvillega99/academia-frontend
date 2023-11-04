import { useNavigate } from 'react-router-dom';
import ProfesoresList from "../components/ProfesoresList";

export default function ProfesoresPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between py-3">
        <h1 className="font-bold text-2xl">Profesores</h1>
        <button className="bg-indigo-500 px-3 py-2 roundlg" onClick={()=> navigate('/profesores/add')}>
          Agregar
        </button>
      </div>
      <ProfesoresList />
    </div>
  )
}
