import React, { useEffect, useState } from "react";
import "./Row.css";
import instance from "./axios";
import Movie from "./Movie";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // function to fetch movies
  useEffect(() => {
    const fetch = async () => {
      await instance
        .get(fetchUrl)
        .then((res) => setMovies(res.data.results))
        .catch((err) => console.log(err));
    };
    fetch();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movie-container">
        {movies.map(({ name, title, poster_path, vote_average }) => (
          <Movie
            name={name}
            title={title}
            poster={poster_path}
            rating={vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
