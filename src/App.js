import './App.css';

import PlayfairSquare from './components/PlayfairSquare/PlayfairSquare.js';
import Keyboard from './components/Keyboard/Keyboard.js';

import {useEffect, useRef, useState} from 'react';

function App() {

  const [bgColor, setBgColor] = useState('transparent');

  const pressedKeys = useRef(new Set());
  const [displayKeys, setDisplayKeys] = useState([]);

  let letterArray = useRef([]);


  // useEffect(() => {

    const handleKeyDown = (event) => {
      // console.log(`Key DOWN: ${event.key}`);
      setBgColor('blue');



      if(pressedKeys.current.size < 2) {
        pressedKeys.current.add(event.key);
        setDisplayKeys([...pressedKeys.current]);
        // console.log(event.key);
        // console.log("DOWN")
        // console.log(`SIZE: ${pressedKeys.current.size}`);
        // // console.log(Array.from(pressedKeys));
        // console.log(Array.from(pressedKeys.current));  
      }

        
    };

    const handleKeyUp = (event) => {
      // console.log(`Key UP: ${e0-vent.key}`);
      setBgColor('transparent');

      pressedKeys.current.delete(event.key);
      setDisplayKeys([...pressedKeys.current])
      // console.log(Array.from(pressedKeys.current));
      // console.log("UP");
    
    };
  
  
    // console.log(displayKeys);
    // console.log("OUT END")
  


  return (
    <div className="App"  tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <header className="App-header">
        <h1 style={{backgroundColor: bgColor}}>Copper Dup3r's Playfair Cipher </h1>
        <PlayfairSquare/>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Keyboard letterOne={displayKeys[0]} letterTwo={displayKeys[1]}/>
        <h1>look above</h1>
      </header>
    </div>
  );
}

export default App;
