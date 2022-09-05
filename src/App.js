import './App.css';

import React from 'react';
import Tetris from './components/Tetris';

const App = () => (
  <div className="App">
    <Tetris rows={20} columns={10}/>
  </div>
)

export default App;
