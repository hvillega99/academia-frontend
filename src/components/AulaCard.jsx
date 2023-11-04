import { useNavigate } from "react-router-dom";

export default function AulaCard(aula) {
    const navigate = useNavigate();

    return (
      <div
      className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
      onClick={() => navigate(`/aulas/${aula.id}`)}
      >
        <h2 className="font-bold">{aula.tema}</h2>
        <p>{aula.fecha}</p>
        <p>{aula.hora}</p>
      </div>
    )
}