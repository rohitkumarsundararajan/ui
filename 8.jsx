import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: 1, q: "Which language is used for web development?", options: ["JavaScript", "C", "Java", "Python"] },
    { id: 2, q: "Which is a database?", options: ["MongoDB", "HTML", "CSS", "React"] },
    { id: 3, q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"] },
    { id: 4, q: "Which is a frontend JavaScript library?", options: ["React", "Node.js", "Express", "MongoDB"] },
    { id: 5, q: "Which protocol is used for web communication?", options: ["HTTP", "FTP", "SMTP", "SSH"] },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Online Survey</h1>

      <form onSubmit={handleSubmit}>
        {questions.map((item, index) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <h3>{index + 1}. {item.q}</h3>
            {item.options.map((opt, i) => (
              <label key={i} style={{ display: "block", margin: "4px 0" }}>
                <input type="radio" name={`question-${item.id}`} required />
                {" "}{opt}
              </label>
            ))}
          </div>
        ))}

        <button type="submit">Submit Survey</button>
      </form>

      {submitted && (
        <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
          Survey submitted successfully! Thank you for your feedback.
        </p>
      )}
    </div>
  );
}

export default App;