import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={() => navigate("/guestbook")}> Sign the guestbook</button>
    </div>
  );
}

export default Home;
