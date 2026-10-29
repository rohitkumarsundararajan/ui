import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Design Homepage", description: "Create responsive UI", status: "Completed" },
    { id: 2, title: "Develop Backend", description: "Build REST APIs", status: "InProgress" },
    { id: 3, title: "Deploy Project", description: "Host on cloud server", status: "Pending" },
  ]);

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "Pending",
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Project Management Dashboard</h1>

      <h2>Add New Task</h2>
      <form onSubmit={addTask}>
        <input
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br /><br />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Add Task</button>
      </form>

      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <label>Status: </label>
          <select
            value={task.status}
            onChange={(e) => updateStatus(task.id, e.target.value)}
          >
            <option>Pending</option>
            <option>InProgress</option>
            <option>Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default App;