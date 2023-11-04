import { useNavigate } from "react-router-dom";

export default function MateriaCard(materia) {
    const navigate = useNavigate();

    return (
      <div
      className="bg-gray-200 p-3 hover:bg-gray-300 cursor-pointer"
      onClick={() => navigate(`/materias/${materia.id}`)}
      >
        <h2 className="font-bold">{materia.nombre}</h2>
        <p>{materia.codigo}</p>
      </div>
    )
}