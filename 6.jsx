import { useState } from "react";

function App() {
  const [casualLeave, setCasualLeave] = useState(12);
  const [medicalLeave, setMedicalLeave] = useState(10);
  const [type, setType] = useState("Casual");
  const [days, setDays] = useState(1);
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const [history, setHistory] = useState([
    { type: "Casual", days: 2, reason: "Family Function" }
  ]);

  const applyLeave = (e) => {
    e.preventDefault();
    const count = Number(days);

    if (type === "Casual") {
      if (count > casualLeave) {
        setMessage("Error: Insufficient Casual Leave balance!");
        return;
      }
      setCasualLeave(casualLeave - count);
    } else {
      if (count > medicalLeave) {
        setMessage("Error: Insufficient Medical Leave balance!");
        return;
      }
      setMedicalLeave(medicalLeave - count);
    }

    setHistory([...history, { type, days: count, reason }]);
    setMessage("Leave applied successfully!");
    setReason("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Leave Management System</h1>

      <h2>Leave Balance</h2>
      <p>Casual Leave: <b>{casualLeave} days</b></p>
      <p>Medical Leave: <b>{medicalLeave} days</b></p>

      <h2>Apply for Leave</h2>
      <form onSubmit={applyLeave}>
        <label>Leave Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Casual</option>
          <option>Medical</option>
        </select>
        <br /><br />

        <input
          type="number"
          min="1"
          placeholder="Number of Days"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          required
        />
        <br /><br />

        <input
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Apply</button>
      </form>
      <p style={{ color: "blue", fontWeight: "bold" }}>{message}</p>

      <h2>Leave History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {item.type} Leave — {item.days} day(s) — Reason: {item.reason}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;