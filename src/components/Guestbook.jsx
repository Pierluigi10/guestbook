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

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  const handleEmail = (e) => {
    let email = e.target.value;
    if (email !== "" && /(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
    setEmail(email);
  };

  const handleTitle = (e) => {
    let title = e.target.value;
    if (title !== "") {
      setTitleIsValid(true);
    } else {
      setTitleIsValid(false);
    }
    setTitle(title);
  };

  const handleMessage = (e) => {
    let message = e.target.value;
    if (message !== "") {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
    setMessage(message);
  };

  const handleButton = () => {
    if (emailIsValid === false) {
      alert("please insert a correct email");
    } else if (titleIsValid === false || messageIsValid === false) {
      alert("please fill in title and message fields");
    } else {
      guestbook.unshift(`${email},${title}, ${message}`);
      localStorage.setItem("guestbook", JSON.stringify(guestbook));
      setGuestbook([...guestbook]);
    }
  };

  return (
    <div>
      <h1>Guestbook</h1>
      <button onClick={() => navigate("/")}>Home</button>

      <form>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="insert your email"
        />
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          placeholder="Title"
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="8"
          value={message}
          onChange={handleMessage}
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
