import React from "react";
import { Link } from "react-router-dom";
import "../styles/firebase.css";

function FireBase() {
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
      <div>
        <h1 className="fbh">FIREBASE HOSTING</h1>
        <div className="angel">
          <p>Spell Ingredients to Spit out Angels from Heaven</p>
          <ul>
            <li>The Heart of a Nephilim</li>
            <li>A Cupid's bow</li>
            <li>Angel Grace</li>
          </ul>

          <p>Spell Ingredients to Open a Portal into Apocalypse World</p>
          <ul>
            <li>The Grace of an Archangel</li>
            <li>The Seal of Solomon</li>
            <li>Fruit from the Tree of Life</li>
            <li>Blood of a Most Holy Man</li>
          </ul>

          <p>Spell Ingredients to Kill the leader of Leviathan</p>
          <ul>
            <li>Bone of a righteous Mortal</li>
            <li>Angel Blood</li>
            <li>You need to bleed an Alpha</li>
            <li>Blood from a ruler of fallen humanity</li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default FireBase;
