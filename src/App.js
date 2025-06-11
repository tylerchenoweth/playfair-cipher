import './App.css';

import KeywordInput from './components/KeywordInput/KeywordInput.js';
import PlayfairSquare from './components/PlayfairSquare/PlayfairSquare.js';
import Keyboard from './components/Keyboard/Keyboard.js';

import {useRef, useState} from 'react';

function App() {

  // for the keyword input
  const [keyword, setKeyword] = useState('');

  // for keeping track of the pressed keys
  const pressedKeys = useRef(new Set());

  // for telling the UI which keys are pressed so it can
  // render the changes
  const [displayKeys, setDisplayKeys] = useState([]);

  const handleKeyDown = (event) => {
    
    // this will tell the square and keyboard not to light up when
    // typing in the input field 
    const tag = document.activeElement.tagName.toLowerCase();
    if(tag === 'input') return;


    if(pressedKeys.current.size < 2) {
      if(/^[a-zA-Z]$/.test(event.key)) {
        pressedKeys.current.add((event.key).toLowerCase());
        setDisplayKeys([...pressedKeys.current]);
      }
      
    }
  };

  const handleKeyUp = (event) => {
    // setBgColor('transparent');
    pressedKeys.current.delete((event.key).toLowerCase());
    setDisplayKeys([...pressedKeys.current])
  };



  return (
    <div className="App"  tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <header className="App-header">
        <h1>Copper Dup3r's Playfair Cipher </h1>

        <KeywordInput value={keyword} onChange={setKeyword}/>

        <PlayfairSquare keyword={keyword} letterOne={displayKeys[0]} letterTwo={displayKeys[1]}/>

        <Keyboard letterOne={displayKeys[0]} letterTwo={displayKeys[1]}/>


        <div className="testSquare"></div>
        <div className="testSquare"></div>
        <div className="testSquare"></div>
      </header>
    </div>
  );
}

export default App;
