import { useNavigate} from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-3">
      <div
      className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
      onClick={() => navigate('/profesores')}
      >
        <h2 className="font-bold">Profesores</h2>
      </div>

      <div
      className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
      onClick={() => navigate('/materias')}
      >
        <h2 className="font-bold">Materias</h2>
      </div>

      <div
      className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
      onClick={() => navigate('/aulas')}
      >
        <h2 className="font-bold">Aulas</h2>
      </div>
    </div>
  )
}
