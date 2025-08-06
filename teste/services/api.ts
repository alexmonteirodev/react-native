export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};
// const url = '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const fetchPopularMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const url = TMDB_CONFIG.BASE_URL + endpoint;

  const r = await fetch(url, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!r.ok) throw new Error("Failed to fetch movies");

  const data = await r.json();
  return data.results;
};
