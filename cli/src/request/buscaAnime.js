import api from '../utils/api'

const url = '/anime?filter[text]=';

async function buscaAnime(anime) {
    const response = await api.get(`${url}${anime}`);
    return response.data;
}

export default buscaAnime;
