import './App.css';

import PlayfairSquare from './components/PlayfairSquare/PlayfairSquare.js';
import Keyboard from './components/Keyboard/Keyboard.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Copper Dup3r's Playfair Cipher </h1>
        <PlayfairSquare />
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Keyboard />
        <h1>look above</h1>
      </header>
    </div>
  );
}

export default App;
