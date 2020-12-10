const API_KEY = "849be77a81b72e8b8443a9585a6637f6";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  search: `/search/movie?api_key=${API_KEY}&query=`,
};

export default requests;
