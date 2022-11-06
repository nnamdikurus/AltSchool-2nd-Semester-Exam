import React, { useState, useEffect } from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {posts.map((post) => {
        <li>{post.results}</li>;
      })}
    </ul>
  );
};

export default Posts;
