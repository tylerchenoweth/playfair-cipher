

import LetterSquare from '../LetterSquare/LetterSquare.js';

import './Keyboard.css';

function Keyboard() {


    const qwertyAlphabet = [
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm'
    ];
      
    // 0-10 --- 0
    // 10-19 --- 10
    // 19-27 --- 19
    return (
        <div className="keyboard">
            
            {/* {
                qwertyAlphabet.map((letter, index) => (
                    <LetterSquare letter={letter} />
                ))
            } */}


            <div className="row">
                {Array.from({length: 10}).map((_, i) => (
                    <LetterSquare letter={qwertyAlphabet[i]} />
                ))}
            </div>
            <div className="row">
                {Array.from({length: 9}).map((_, i) => (    
                    <LetterSquare letter={qwertyAlphabet[i+10]} /> 
                ))}
            </div>
            <div className="row">
                {Array.from({length: 7}).map((_, i) => (
                    <LetterSquare letter={qwertyAlphabet[i+19]} />
                ))}
            </div>

        </div>
    );

}

export default Keyboard;