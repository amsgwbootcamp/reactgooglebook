import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="/">
      Google Books
      </a>
    <a className="navbar-brand" href="/search">
      Search
      </a>
    <a className="navbar-brand" href="/saved">
      Saved
      </a>
    </nav >   
    );
}

export default Nav;
