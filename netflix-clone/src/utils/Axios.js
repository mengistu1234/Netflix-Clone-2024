// import axios from "axios";

// const instance=axios.create({
// 	baseURL:"https://api.themoviedb.org/3",

// })
// export default instance;

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzg4ZDM3NDQ0NTNiZGUzOTAzMmFhOTNhMWQ4ZmUxNCIsInN1YiI6IjY1YWU1M2FiODQ4ZWI5MDBhYzljMzRjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-6mabzuC4sSlEuhBuPv285d1DJWbL5nk2yRKan68rkk",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
