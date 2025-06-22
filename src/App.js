import './App.css';

// Get COLORS for js 
import { COLORS, setCssVariables } from './constants/colors';

import KeywordInput from './components/KeywordInput/KeywordInput.js';
import PlayfairSquare from './components/PlayfairSquare/PlayfairSquare.js';
import Keyboard from './components/Keyboard/Keyboard.js';

import {useRef, useState, useEffect} from 'react';


function App() {

  useEffect(() => {
    // Set css variable colors
    setCssVariables(COLORS);
  });

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


  let isMobile;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // determine if were on a mobile screen to adjust the border
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  // determine if were on a mobile screen to adjust the border
  useEffect(() => {
    const handleResize = () => setScreenHeight(window.innerHeight);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  if(screenWidth <= 822 || screenHeight <= 842) {
    isMobile = true;
  } else {
    isMobile = false;
  }



  return (
    <div className="App"  tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <header className="App-header">
        <h1 className="title-header">Cooper Dup3r's Playfair Cipher </h1>

        <KeywordInput value={keyword} onChange={setKeyword}/>
        

        <PlayfairSquare keyword={keyword} letterOne={displayKeys[0]} letterTwo={displayKeys[1]} isMobile={isMobile}/>

        <Keyboard letterOne={displayKeys[0]} letterTwo={displayKeys[1]} isMobile={isMobile}/>

      </header>
    </div>
  );
}

export default App;
