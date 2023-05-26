import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import "./Components/MyNav/Nav.css";
import Nav from "./Components/Nav";
import Home from "./pages/Home/Home";
import LevelCourse from "./pages/LevelCourse/LevelCourse";
import { AuthContextProvider } from "./contexts/AuthContext";

// import routes from "./routes";
function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="levels/:level" element={<LevelCourse />} />
        </Routes>
      </div>
  );
}

export default App;
