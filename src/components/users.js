import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Posts from "./posts";
import "../styles/users.css";

function Users() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api/?page=${page}&results=60&seed=abc");
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

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

      <div className="users-mk">Users of Mortal Kombat</div>

      <Posts posts={posts} loading={loading} />

    </section>
  );
}

export default Users;
