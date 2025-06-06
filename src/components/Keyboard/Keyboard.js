

import LetterSquare from '../LetterSquare/LetterSquare.js';

import './Keyboard.css';

import {useRef, useEffect} from 'react';

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
                // <p>{offsets[i]}</p>
            

                <div className="row">
                    {Array.from({length: qwertyAlphabet[i].length}).map((_, k) => 
                    
                    qwertyAlphabet[i][k] === letterOne ? (
                            <LetterSquare letter={qwertyAlphabet[i][k]} isPressed={true} />
                    ) : qwertyAlphabet[i][k] === letterTwo ? (
                        <LetterSquare letter={qwertyAlphabet[i][k]} isPressed={true} />
                    ) : (
                        <LetterSquare letter={qwertyAlphabet[i][k]} isPressed={false} />
                    ))}
                </div>

            )}

        </div>
    );

}

export default Keyboard;