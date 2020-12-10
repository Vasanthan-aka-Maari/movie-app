import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import requests from "./request";
import instance from "./axios";

import "./HomeCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeCarousel() {
  const [bg, setBg] = useState([]);
  const imageURL = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    async function fetch() {
      await instance
        .get(requests.netflixOriginal)
        .then((res) => setBg(res.data.results));
    }
    fetch();
  });

  const settings = {
    infinite: true,
    arrows: true,
    autoplay: true,
    centerMode: true,
    swipeToSlide: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <div>
      <Slider {...settings}>
        {bg.map(({ backdrop_path, name, overview }) => (
          <div className="image">
            <div id="overlay"></div>
            <img src={imageURL + backdrop_path} alt="" />
            <div className="image-info">
              <h1>{name}</h1>
              <p>{overview}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeCarousel;
