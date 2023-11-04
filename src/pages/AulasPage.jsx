import { useNavigate } from 'react-router-dom';
import AulasList from '../components/AulasList';

export default function AulasPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between py-3">
        <h1 className="font-bold text-2xl">Aulas</h1>
        <button className="bg-indigo-500 px-3 py-2 roundlg" onClick={()=> navigate('/aulas/add')}>
          Agregar
        </button>
      </div>
      <AulasList />
    </div>
  )
}
