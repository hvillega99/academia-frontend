import axios from 'axios';

const materiaApi = axios.create({
    baseURL: 'http://localhost:8000/api/materias/'
});

export const getMaterias = () => {
    return materiaApi.get('/');
}

export const getMateria = (id) => {
    return materiaApi.get('/' + id + '/');
}

export const addMateria = (materia) => {
    materiaApi.post('/', materia);
}

export const removeMateria = (id) => {
    materiaApi.delete('/' + id + '/');
}

export const updateMateria = (id, materia) => {
    materiaApi.put('/' + id + '/', materia);
}