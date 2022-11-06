import React from "react";
import {Link} from "react-router-dom"
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <section className="error-404">
      <div className="tool-bar">
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/about">About</Link>
        </p>
        <p>
          <Link to="/users">Users</Link>
        </p>
        <p>
          <Link to="/characters">Characters</Link>
        </p>
      </div>
      <>
        <h1>Error 404 - Page not found</h1>
        <p>
          This page link may have been mispelt, broken or transfered to another
          location
        </p>
      </>
    </section>
  );
};

export default PageNotFound;
