import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

function About() {
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

      <div className="logsign">
        <p className="login">
          <Link id="login" to="/login">
            Login
          </Link>
        </p>
        <p className="signup">
          <Link id="signup" to="/signup">
            SignUp
          </Link>
        </p>
      </div>

      <p className="click">
        <sub>Click here ====</sub>
      </p>
      <p className="abt-mk">
        <Link to="/firebase">ABOUT MORTAL KOMBAT</Link>
      </p>

      <div className="about-mk">
        <p>
          Ahead of the release of the latest ‘Mortal Kombat’ reboot on film,
          let’s properly pay homage to the iconic fighting game franchise that
          spawned the Warner Bros. movie.
        </p>
        <img src="mk4.png" alt="about mk" style={{ width: 1000 }} />
        <p>
          On April 23, a brand-new Mortal Kombat movie will debut on HBO Max and
          in theaters. For video game fans, martial arts fans, and action movie
          fans, it’s cause for excitement. The original 1995 Mortal Kombat movie
          is beloved, but it was of the ‘so-bad-it’s-good’ variety—campy and
          aware of its shortcomings. Meanwhile, its sequel, Mortal Kombat:
          Annihilation (1997), is infamous for being straight-up bad, no
          qualifiers needed. Not only did the filmmakers recast most of the main
          roles from the originals, but the action—a must-have for a movie about
          a fighting tournament—felt overly scripted and fake. The one-liners
          didn’t hit, the story didn’t make sense, and everything had a
          low-budget feel to it—both the practical effects and the CGI failed to
          convince a single viewer. It seems, based on the red band trailers and
          early reviews, that this new Mortal Kombat will be legitimately good,
          not just good “for a video game movie.” It’s also an opportunity for
          several Asian actors, like Ludi Lin (Liu Kang) and Max Huang (Kung
          Lao) to get the facetime and recognition they deserve in front of a
          global audience. It’s worth noting that Mortal Kombat (2021) is rated
          R, which means we’ll get to see gory Fatalities in all their glory.
          It’s those Fatalities that put Mortal Kombat on people’s radars in the
          first place, beginning with that first video game in 1992, and
          continuing with the 10 sequels that followed in its wake. To celebrate
          the release of Mortal Kombat in theaters, we’re ranking every main
          series Mortal Kombat video game in the franchise’s history, from worst
          to best. Please note that we are not including spinoffs like Shaolin
          Monks, and we’re categorizing expansions and repackagings under their
          core games. With that said, here is every video game that invited you,
          over the past three decades, to “Test Your Might!”
        </p>
      </div>
    </section>
  );
}

export default About;
