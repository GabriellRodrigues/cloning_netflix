const API_KEY = 'dd4c6fcbec83af2c302f97c1be30fbd9';
const API_BASE = 'https://developers.themoviedb.org/3';

/*
- Originais da netflix
- Recomendados
- Em alta
- ação
- comedia
- terror
- romance 
- documentarios
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomelist: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'Documentary',
                title: 'Documentários',
                items: []
            },
        ]
    }
}
