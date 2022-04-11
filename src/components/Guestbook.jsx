import React, { useState } from "react";
import "../style/guestbook.css";
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

  const postGuest = { email, title, message, index: guestbook.length };

  const handleButton = () => {
    if (emailIsValid === false) {
      alert("please insert a correct email");
    } else if (titleIsValid === false || messageIsValid === false) {
      alert("please fill in title and message fields");
    } else {
      // guestbook.unshift(`${email},${title}, ${message}`);
      guestbook.push(postGuest);
      localStorage.setItem("guestbook", JSON.stringify(guestbook));
      setGuestbook([...guestbook]);
    }
  };

  return (
    <div className="guestbookComponent">
      <div className="guestbookHeader">
        <h2>Guestbook</h2>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <form>
        <div className="inputArea">
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
        </div>
        <button onClick={(e) => handleButton(e)}>Submit</button>
      </form>
      <div className="guestbookPosts">
        {guestbook.map((post, i) => (
          <ul key={i}>
            <li>{post.email}</li>
            <li>{post.message}</li>
            <li>{post.title}</li>
            <li>{post.index}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Guestbook;
