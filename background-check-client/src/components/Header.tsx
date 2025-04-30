import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '50px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <nav>
        <Link to="/input" style={{ marginRight: '50px' }}>Input</Link>
        <Link to="/candidates">Candidates</Link>
      </nav>
    </header>
  );
};