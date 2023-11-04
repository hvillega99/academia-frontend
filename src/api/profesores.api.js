import axios from 'axios';

const profesorApi = axios.create({
    baseURL: 'http://localhost:8000/api/profesores/'
});

export const getProfesores = () => {
    return profesorApi.get('/');
}

export const getProfesor = (id) => {
    return profesorApi.get('/' + id + '/');
}

export const addProfesor = (profesor) => {
    profesorApi.post('/', profesor);
}

export const removeProfesor = (id) => {
    profesorApi.delete('/' + id + '/');
}

export const updateProfesor = (id, profesor) => {
    profesorApi.put('/' + id + '/', profesor);
}