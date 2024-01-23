import React, { useEffect, useState } from "react";
import "./Row.css";
import Axios from "../../../utils/Axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
 

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(fetchUrl);
        const response = await Axios.get(fetchUrl);
        setMovie(response.data.results);
        console.log(response);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Handle click logic here
   

  // Rest of the code...

};

     movieTrailer(movie?.title || movie?.name || movie.original_name).then(
       (url) => {
         console.log(url);
         const urlParams = new URLSearchParams(new URL(url).search);
         console.log(urlParams);
         console.log(urlParams.get(`v`));
         setTrailerUrl(urlParams.get(`v`));
       }
     );
    }

  

  const opts = {
    height: "390",
    width: "100%",
    playerVar: {
      autoplay: 1,
    },
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
