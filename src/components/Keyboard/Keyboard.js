

import LetterSquare from '../LetterSquare/LetterSquare.js';

import './Keyboard.css';

// Get COLORS for js 
import { COLORS, setCssVariables } from '../../constants/colors';

import getBorder from '../../utils/getBorder.js';

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

            {Array.from({length: qwertyAlphabet.length}).map((_, row) => (
                <div className="row">
                    {qwertyAlphabet[row]?.map((letter, index) => {
                        let squareColor = "transparent";
                        let border;

                        if(qwertyAlphabet[row][index] === letterOne || qwertyAlphabet[row][index] === letterTwo) {
                            squareColor=COLORS.myblue;
                        }

                        return (    
                            <LetterSquare 
                                letter={qwertyAlphabet[row][index]} 
                                squareColor={squareColor}
                                border={getBorder(true, row, index)}
                            />
                        );

                    })}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;