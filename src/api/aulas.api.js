import axios from 'axios';

const aulaApi = axios.create({
    baseURL: 'http://localhost:8000/api/aulas/'
});

export const getAulas = () => {
    return aulaApi.get('/');
}

export const getAula = (id) => {
    return aulaApi.get('/' + id + '/');
}

export const addAula = (aula) => {
    aulaApi.post('/', aula);
}

export const removeAula = (id) => {
    aulaApi.delete('/' + id + '/');
}

export const updateAula = (id, aula) => {
    aulaApi.put('/' + id + '/', aula);
}