import React from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Outlet />
    </div>
  );
}
export default App;
