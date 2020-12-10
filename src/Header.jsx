import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

function Header({ setQuery }) {
  const history = useHistory();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      history.push("/search");
      setInput("");
    } else {
      alert("Please enter a movie to search");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
          alt="netflix"
          className="logo"
        />
      </Link>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setQuery(e.target.value);
          }}
          placeholder="Search a movie"
        />
        <SearchIcon />
      </form>
      <div className="userinfo">
        <Avatar />
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Header;
