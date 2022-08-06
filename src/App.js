import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio" element={<PortFolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
