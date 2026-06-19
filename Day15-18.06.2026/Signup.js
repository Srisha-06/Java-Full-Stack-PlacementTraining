import React, {useState} from "react";

export const Signup = () => {
const [name, setName] = useState("");
const [phno, setPhno] = useState("");
const [mail, setMail] = useState("");
const [user, setUser] = useState("");
const [pswd, setPswd] = useState("");
const [cpswd, setCpswd] = useState("");
const [dob, setDob] = useState("");

const handleclick=()=>{
    const passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,15}$/;

    if (!name ||!mail ||!user ||!pswd ||!cpswd ||!dob) {
        alert("Please fill all fields");
    }
    else if (!passwordPattern.test(pswd)) {
    alert(
      "Password must be 8-15 characters long and contain at least one number and one special character"
    );
    }
    else if (pswd !== cpswd) {
      alert("Passwords do not match");
    }
    else {
        alert("Completed Sign Up");
    };
}
        
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
    <h2>Sign Up Form</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "10px",
        }}
      />
      <input
        type="number"
        placeholder="Enter Phone Number"
        value={phno}
        onChange={(e) => setPhno(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <input
        type="text"
        placeholder="Enter Email Id"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <input
        type="text"
        placeholder="Enter Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={pswd}
        onChange={(e) => setPswd(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={cpswd}
        onChange={(e) => setCpswd(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <input
        type="date"
        placeholder="Enter DOB"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{
          width: "90%",
          padding: "8px",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={handleclick}
        style={{
          padding: "8px 20px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >        Complete Sign Up
      </button>
    </div>
  )
}