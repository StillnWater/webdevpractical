import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Name from "./Components/Name"
import { Routes, Route, Link, Form } from "react-router-dom";

function App() {
  return (
    <>
    
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Name/>
    </>
  
  );
}

export default App;
