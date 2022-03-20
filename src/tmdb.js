const apiKey = "a45ffabcac401a38712f8bcbbc80d1d4"
const baseUrl = "https://api.themoviedb.org/3"
// const language = "pt-BR"

const basicFetch = async (endpoint) => {
  const req = await fetch(`${baseUrl}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da NetFlix",
        items: await basicFetch(`/discover/tv?with_network=213&&language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${apiKey}`),
      },
      {
        slug: "Documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${apiKey}`),
      },
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}
    if(movieId){
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${apiKey}`)
                break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${apiKey}`)
                break;
            default:
                info = null
                break;
        }
    }
    return info
  }
};
