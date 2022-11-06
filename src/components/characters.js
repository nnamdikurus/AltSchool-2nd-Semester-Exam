import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/characters.css";

const Characters = () => {
  const [char, setChar] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  //const [listItems, setListItems] = useState([]);

  useEffect(
    (event) => {
      const charItems = [
        {
          name: "Lui Kang",
          image: "luikang.png"
        },
        {
          name: "Jax",
          image: "jax.png",
        },
        {
          name: "Motaro",
          image: "motaro.jfif",
        },
        {
          name: "Shao Khan",
          image: "kahn.jfif",
        },
        {
          name: "Johnny Cage",
          image: "jcage.jfif",
        },
        {
          name: "Sub Zero",
          image: "subzero.png",
        },
        {
          name: "Sindel",
          image: "sindel.jfif",
        },
        {
          name: "Rayden",
          image: "rayden.jfif",
        },
        {
          name: "Scorpion",
          image: "scorpion.jfif",
        },
        {
          name: "Smoke",
          image: "smoke.png",
        },
        {
          name: "Sonya",
          image: "sonya.jfif",
        },
        {
          name: "Cyrax",
          image: "cyrax.jfif",
        },
      ];
      const items = charItems[currentPosition];
      setChar(items);
      setLoading(false);
    },
    [currentPosition]
  );

  const handleNext = (event) => {
    event.preventDefault()
    setCurrentPosition(currentPosition + 1)
  };

  const handlePrevious = (event) => {
    event.preventDefault();
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    } else {
      setCurrentPosition(0);
    }
  };

  return (
    <section>
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

      <section>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="current-item">
            <h2>{char.name}</h2>
            <img src = {char.image} alt= "mk-characters"style = {{width:300}}/>
          </div>
        )}
      </section>

      <div className="PrevNext">
        <button className="previous" onClick={handlePrevious}>
          Previous
        </button>
        <button className="previous" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Characters;
