

import LetterSquare from '../LetterSquare/LetterSquare.js';

import './Keyboard.css';

// Get COLORS for js 
import { COLORS } from '../../constants/colors';

import getBorder from '../../utils/getBorder.js';


function Keyboard({letterOne = undefined, letterTwo = undefined, isMobile = false}) {

    const qwertyAlphabet = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    
    
    return (
        <div className="keyboard">

            {Array.from({length: qwertyAlphabet.length}).map((_, row) => {
                return (
                <div className="row" key={row}>
                    {qwertyAlphabet[row]?.map((letter, index) => {
                        let squareColor = "transparent";

                        if(qwertyAlphabet[row][index] === letterOne || qwertyAlphabet[row][index] === letterTwo) {
                            squareColor=COLORS.myblue;
                        }

                        return (    
                            <LetterSquare 
                                key={index}
                                letter={qwertyAlphabet[row][index]} 
                                squareColor={squareColor}
                                border={getBorder(true, row, index, isMobile)}
                            />
                        );

                    })}
                </div>
                )
        })}
        </div>
    );
}

export default Keyboard;