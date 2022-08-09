import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';
import ScrollToTop from './common/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/project" element={<PortFolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
