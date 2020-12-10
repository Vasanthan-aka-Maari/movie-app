import React from "react";
import "./Movie.css";

function Movie({ name, title, poster, rating }) {
  const imageURL = `https://image.tmdb.org/t/p/w500${poster}`;

  return (
    <div className="movie">
      <img src={imageURL} alt={title || name} className="movie-image" />
      <div className="movie-info">
        <h3 className="movie-title">{name ? name : title}</h3>
        <h5 className="movie-rating">Votes: {rating}</h5>
      </div>
    </div>
  );
}

export default Movie;
