import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import requests from "./request";
import Row from "./Row";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import HomeCarousel from "./HomeCarousel";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <Router>
        <Header setQuery={setQuery} />
        <Switch>
          <Route path="/search">
            <SearchPage query={query} />
          </Route>
          <Route exact path="/">
            <div className="home">
              <div className="carousel-container">
                <HomeCarousel />
              </div>
              <Row
                title="Netflix Originals"
                fetchUrl={requests.netflixOriginal}
              />
              <Row title="Now Trending" fetchUrl={requests.trending} />
              <Row title="Top Rated" fetchUrl={requests.topRated} />
              <Row title="Action Movies" fetchUrl={requests.actionMovies} />
              <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
              <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
              <Row title="Romantic Movies" fetchUrl={requests.romanticMovies} />
              <Row
                title="Documentary Movies"
                fetchUrl={requests.documentaries}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
