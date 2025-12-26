import React, { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Status: ${res.status}`); 
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;


/*App.js

import React from "react";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <h1>Blog Post Viewer</h1>
      <PostList />
    </div>
  );
}

export default App;
*/