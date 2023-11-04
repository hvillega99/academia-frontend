import {useEffect, useState} from 'react';
import { getMaterias } from '../api/materias.api';
import MateriaCard from './MateriaCard';

export default function MateriasList() {
    const [materias, setMaterias] = useState([])

    useEffect(() => {
  
      const loadMaterias = async () => {
        const res = await getMaterias()
        setMaterias(res.data)
      }
  
      loadMaterias()
  
    }, [])
  
    return (
      <div className="grid grid-cols-3 gap-3">
        {materias && materias.map(materia => (
          <div key={materia.id}>
            <MateriaCard {...materia} />
          </div>
        ))}
      </div>
    )
}