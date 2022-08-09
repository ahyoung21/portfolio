import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './common/global-styles';
import theme from './common/theme';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import PortFolio from './components/PortFolio';
import ScrollToTop from './common/ScrollToTop';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<PortFolio />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
