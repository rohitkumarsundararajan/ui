import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(["Welcome to my microblog!", "React is awesome!"]);
  const [isFollowing, setIsFollowing] = useState(false);

  // 1. Login screen
  if (!isLoggedIn) {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h2>Login to Microblog</h2>
        <input placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }

  // 2. Main Microblog screen
  const addPost = () => {
    if (postText !== "") {
      setPosts([postText, ...posts]);
      setPostText("");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Microblog</h1>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>

      <h3>Post an Update</h3>
      <textarea
        placeholder="What's happening?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      /><br />
      <button onClick={addPost}>Publish Post</button>

      <h3>People to Follow</h3>
      <p>
        @alex{" "}
        <button onClick={() => setIsFollowing(!isFollowing)}>
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </p>

      <h3>Your Feed</h3>
      {posts.map((post, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "8px 0" }}>
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
}

export default App;