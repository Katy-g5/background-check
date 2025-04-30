import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import InputPage from './pages/InputPage';
import OutputPage from './pages/OutputPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/input" element={<InputPage />} />
        <Route path="/candidates" element={<OutputPage />} />
        <Route path="*" element={<Navigate to="/input" />} />
      </Routes>
    </Router>
  );
};