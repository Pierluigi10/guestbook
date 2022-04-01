import React from "react";
import { useNavigate } from "react-router-dom";

function Guestbook() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Guestbook</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default Guestbook;
