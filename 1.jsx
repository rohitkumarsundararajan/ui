import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Message sent successfully!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Portfolio</h1>
      <p>Welcome to my personal portfolio website.</p>

      <nav>
        <a href="#about">About</a> |{" "}
        <a href="#skills">Skills</a> |{" "}
        <a href="#projects">Projects</a> |{" "}
        <a href="#contact">Contact</a>
      </nav>

      <div id="about">
        <h2>About Me</h2>
        <p>I am a developer interested in web technologies.</p>
      </div>

      <div id="skills">
        <h2>Skills</h2>
        <p>HTML, CSS, JavaScript, React</p>
      </div>

      <div id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Personal Portfolio</li>
          <li>To-Do List Application</li>
          <li>Food Delivery Website</li>
        </ul>
      </div>

      <div id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder="Your Name" required /><br /><br />
          <input type="email" placeholder="Your Email" required /><br /><br />
          <textarea placeholder="Your Message" required /><br /><br />
          <button type="submit">Send Message</button>
        </form>
        <p style={{ color: "green" }}>{message}</p>
      </div>
    </div>
  );
}

export default App;