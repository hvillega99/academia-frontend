import {useEffect, useState} from 'react';
import { getAulas } from '../api/aulas.api';
import AulaCard from './AulaCard';

export default function AulasList() {
    const [aulas, setAulas] = useState([])

    useEffect(() => {
  
      const loadAulas = async () => {
        const res = await getAulas()
        setAulas(res.data)
      }
  
      loadAulas()
  
    }, [])
  
    return (
      <div className="grid grid-cols-3 gap-3">
        {aulas && aulas.map(aula => (
          <div key={aula.id}>
            <AulaCard {...aula} />
          </div>
        ))}
      </div>
    )
}
