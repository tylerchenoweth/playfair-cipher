

import LetterSquare from '../LetterSquare/LetterSquare.js';

import './Keyboard.css';

function Keyboard({letterOne = undefined, letterTwo = undefined}) {

    const qwertyAlphabet = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    // console.log("Letter One: ", letterOne);
    // console.log("Letter Two: ", letterTwo)
    
    return (
        <div className="keyboard">

            {Array.from({length: qwertyAlphabet.length}).map((_, i) => 
                <div className="row">
                    {Array.from({length: qwertyAlphabet[i].length}).map((_, k) => 
                    
                    qwertyAlphabet[i][k] === letterOne || qwertyAlphabet[i][k] === letterTwo ? (
                        <LetterSquare letter={qwertyAlphabet[i][k]} letterColor={"blue"} />
                    ):(
                        <LetterSquare letter={qwertyAlphabet[i][k]} letterColor={"transparent"} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Keyboard;