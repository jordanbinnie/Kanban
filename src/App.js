import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Kanban from './components/kanban/Kanban'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Kanban />
    </div>
  );
}

export default App;
