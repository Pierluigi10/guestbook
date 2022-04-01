import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const _guestbook = JSON.parse(localStorage.getItem("guestbook"));

function Guestbook() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [guestbook, setGuestbook] = useState(
    _guestbook === null ? [] : _guestbook
  );

  const handleButton = () => {
    guestbook.push(`${email},${title}, ${message}`);
    localStorage.setItem("guestbook", JSON.stringify(guestbook));
    setGuestbook([...guestbook]);
  };

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
        <textarea
          placeholder="Message"
          name="message"
          rows="8"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={true}
        ></textarea>
        <button onClick={(e) => handleButton(e)}>Submit</button>
      </form>
      <div>
        {guestbook.map((post, i) => (
          <li key={i}>{post}</li>
        ))}
      </div>
    </div>
  );
}

export default Guestbook;
