import { useNavigate } from 'react-router-dom';
import MateriasList from '../components/MateriasList';

export default function MateriasPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between py-3">
        <h1 className="font-bold text-2xl">Materias</h1>
        <button className="bg-indigo-500 px-3 py-2 roundlg" onClick={()=> navigate('/materias/add')}>
          Agregar
        </button>
      </div>
      <MateriasList />
    </div>
  )
}