import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//import base url
import axios from "../axios";

const base_Url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(fetchUrl);
      // console.log(requests.data.results);
      setMovies(requests.data.results);
      return requests;
    };

    fetchData();
  }, [fetchUrl]);

  // console.table(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const useParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(useParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              alt={movie.poster_name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
