import {useEffect, useState} from 'react';
import { getProfesores } from '../api/profesores.api';
import ProfesorCard from './ProfesorCard';

export default function ProfesoresList() {

  const [profesores, setProfesores] = useState([])

  useEffect(() => {

    const loadProfesores = async () => {
      const res = await getProfesores()
      setProfesores(res.data)
    }

    loadProfesores()

  }, [])

  return (
    <div className="grid grid-cols-3 gap-3">
      {profesores && profesores.map(profesor => (
        <div key={profesor.id}>
          <ProfesorCard {...profesor} />
        </div>
      ))}
    </div>
  )
}
