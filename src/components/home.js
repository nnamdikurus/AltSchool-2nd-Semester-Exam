import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <section className="container">
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
      <hr />

      <div className="mk-title">
        <p id="mk">MORTAL KOMBAT</p>
        <p>
          <img
            className="img_mk"
            src="mkall.png"
            alt="mortal_kombat_pics"
            style={{ width: 1000 }}
          />
        </p>
      </div>
      <div className="knowledge">
        <p>THERE IS NO KNOWLEDGE THAT IS NOT POWER</p>
      </div>
      <footer>contact us</footer>
    </section>
  );
}

export default Home;
