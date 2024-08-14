import React from 'react';
import Home from './Components/Home/Home';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Properties from './Components/Properties/Properties';
import Services from './Components/Services/Services';
import Construction from './Components/Construction/Construction';
import ContectPage from './Components/ContectPage/ContectPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/constructions" element={<Construction />} />
        <Route path="/contactPage" element={<ContectPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
