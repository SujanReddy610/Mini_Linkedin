import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import PostCard from "../components/PostCard.jsx";
import axios from "axios";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };
        const response = await axios.get("http://localhost:5000/api/posts", config);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (user) {
      fetchPosts();
    }
  }, [user]);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const response = await axios.post("http://localhost:5000/api/posts", { content }, config);
      setPosts([response.data, ...posts]);
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="home-page">
      <div className="create-post-container">
        <h2>Create a new post</h2>
        <form onSubmit={handleCreatePost}>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>

      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        ) : (
          <p>No posts yet. Be the first to post!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;