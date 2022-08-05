import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<PortFolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
