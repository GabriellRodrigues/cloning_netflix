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
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_generes=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_generes=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_generes=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_generes=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_generes=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}
