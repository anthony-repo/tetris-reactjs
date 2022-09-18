import './App.css';

import React from 'react';
import Game from './components/Game';




//Start running the Tetris App
const App = () => {

  const handleKeyDown = (e) => {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  

  return (
    <div className="App">
      <Game />
    </div>
  );
};

export default App;
