import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SatTest() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "mybatch" && password === "happy@143") {
      alert("Login Successful");
      navigate("/tasks");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br/><br/>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}