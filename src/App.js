import './App.css';

import PlayfairSquare from './components/PlayfairSquare/PlayfairSquare.js';
import Keyboard from './components/Keyboard/Keyboard.js';

import {useEffect, useRef, useState} from 'react';

function App() {

  const [bgColor, setBgColor] = useState('transparent');

  // for keeping track of the pressed keys
  const pressedKeys = useRef(new Set());

  // for telling the UI which keys are pressed so it can
  // render the changes
  const [displayKeys, setDisplayKeys] = useState([]);

  const handleKeyDown = (event) => {
    setBgColor('blue');

    if(pressedKeys.current.size < 2) {
      if(/^[a-zA-Z]$/.test(event.key)) {
        pressedKeys.current.add(event.key);
        setDisplayKeys([...pressedKeys.current]);
      }
      
    }
  };

  const handleKeyUp = (event) => {
    setBgColor('transparent');
    pressedKeys.current.delete(event.key);
    setDisplayKeys([...pressedKeys.current])
  };



  return (
    <div className="App"  tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <header className="App-header">
        <h1>Copper Dup3r's Playfair Cipher </h1>

        <PlayfairSquare letterOne={displayKeys[0]} letterTwo={displayKeys[1]}/>

        <Keyboard letterOne={displayKeys[0]} letterTwo={displayKeys[1]}/>
      </header>
    </div>
  );
}

export default App;
