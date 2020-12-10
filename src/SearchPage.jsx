import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import requests from "./request";
import instance from "./axios";
import StarIcon from "@material-ui/icons/Star";

function SearchPage({ query }) {
  const baseURL = `${requests.search}${query}`;
  const imageURL = "https://image.tmdb.org/t/p/w500";
  const [results, setResults] = useState([]);
  useEffect(() => {
    instance.get(baseURL).then((res) => setResults(res.data.results));
  });
  return (
    <div className="searchPage">
      <div className="result-container">
        {results.map(
          ({ poster_path, title, overview, vote_average, release_date }) => (
            <div className="result">
              <img src={imageURL + poster_path} alt={title} />
              <div className="result-info">
                <h1 className="title">{title}</h1>
                <p className="overview">{overview}</p>
                <p className="vote">
                  {vote_average}
                  <StarIcon className="star-icon" />
                </p>
                <p className="release-date">
                  Released On: {release_date ? release_date : " not found"}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SearchPage;
