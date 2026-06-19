import React, { useState, useEffect } from "react";

function EffectHook2_count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
        textAlign: "center",
        marginTop: "100px",
        border: "1px solid #ccc",
        width: "250px",
        margin: "100px auto",
        padding: "20px",
        borderRadius: "10px",
      }}>
      <h1>Auto Counter</h1>
      <h2>{count}</h2>
      <p>Updates every 2 seconds</p>
    </div>
  );
}

export default EffectHook2_count;