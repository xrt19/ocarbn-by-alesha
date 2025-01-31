import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import FAQ from './pages/FaQ';
import ProjectDetail from './pages/projectDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
