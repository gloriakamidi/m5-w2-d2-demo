import React from "react";
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );

  {
    /* Component */
  }
  function Home() {
    return (
      <div>
        <h2>Home</h2>
        <p>This is home</p>
      </div>
    );
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
}

// Route goes from top to bottom when looking for a match
// You need a jsx element to wrap everything ex: div or router
