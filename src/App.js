import React from 'react';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Properties from './Components/Properties/Properties';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
