import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Complete Lab Record", "Practice React"]);

  // 1. If not logged in, show simple HTML Login form
  if (!isLoggedIn) {
    return (
      <div style={{ padding: "30px", fontFamily: "Arial" }}>
        <h2>Login to Manage To-Do</h2>
        <input placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }

  // 2. Once logged in, show the To-Do list
  const addTask = () => {
    if (task !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>To-Do List Manager</h1>

      <input
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((item, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {item}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <br />
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default App;