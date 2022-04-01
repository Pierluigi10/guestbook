import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Guestbook() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Guestbook</h1>
      <button onClick={() => navigate("/")}>Home</button>

      <form>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="insert your email"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="your message"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Guestbook;
