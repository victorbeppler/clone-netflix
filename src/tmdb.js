const apiKey = process.env.apiKey;
const baseUrl = process.env.baseUrlMovie;
const language = "pt-BR"

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
        title: "Originais do NetFlix",
        items: await basicFetch(`/discover/tv?with_network=213&&language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFetch(`/trending/all/week?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        items: await basicFetch(`/movie/top_rated?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(`/discover/movie?with_genres=35?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(`/discover/movie?with_genres=27?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "romance",
        title: "Romeance",
        items: await basicFetch(`/discover/movie?with_genres=10749?language=${language}&api_key=${apiKey}`),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(`/discover/movie?with_genres=99?language=${language}&api_key=${apiKey}`),
      },
    ];
  },
};
