import React from "react";
import "./App.css";
import Carrd from "./Components/Carrd";

function App() {
  return (
    <div className="box">
      <div className="container">
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#777",
            textAlign: "center",
          }}
        >
          6 BirthDay Reminders Today
        </p>
        <Carrd />
      </div>
    </div>
  );
}

export default App;
