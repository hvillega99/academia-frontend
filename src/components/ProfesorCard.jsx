import { useNavigate } from "react-router-dom";

export default function ProfesorCard(profesor) {
  const navigate = useNavigate();

  return (
    <div
    className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
    onClick={() => navigate(`/profesores/${profesor.id}`)}
    >
      <h2 className="font-bold">{profesor.nombre}</h2>
      <p>{profesor.especialidad}</p>
    </div>
  )
}
