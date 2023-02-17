import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import Header from './components/Header';

// les pages de l'application
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

// other
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import GlobalStyle from './utils/styles/GlobalStyle'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route exact path="portfolio/" element={<Home />} />
          <Route path="portfolio/about" element={<About />} />
          <Route path="portfolio/project" element={<Project />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </Router>
    {/* <Home /> */}
  </React.StrictMode>
);
