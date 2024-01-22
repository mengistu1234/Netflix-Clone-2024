const API_KEY= process.env.REACT_APP_API_KEY;
const Request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languge=en-us`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&width_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&languge=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&width_genres=99`,
  fetchTvShow: `tv/popular?api_key=${API_KEY}&languge=en-us&page=1`,
};
export default Request;