import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Categories from './pages/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
export default App;
