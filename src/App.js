import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Guestbook from "./components/Guestbook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </div>
  );
}

export default App;
