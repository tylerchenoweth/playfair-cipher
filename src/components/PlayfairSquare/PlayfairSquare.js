
import LetterSquare from '../LetterSquare/LetterSquare.js'
import getCipherLetters from '../../utils/getCipherLetters.js'

import './PlayfairSquare.css';

import {COLORS} from '../../constants/colors';

function PlayfairSquare({keyword='', letterOne = undefined, letterTwo = undefined}) {

    keyword = keyword.toLowerCase();

    const alphabetLeftovers = Array.from({ length: 26 }, (_, i) => {
        // 9 because we dont want 'j'
        if(i !== 9) {
            // dont include letters from the keyword
            if(!keyword.includes(String.fromCharCode(97+i))) {
                return String.fromCharCode(97 + i);
            }
        }
    }).filter(Boolean);

    // load cipher array
    const playfairArr = [...keyword.split(''),...alphabetLeftovers]

    // the actual 2D array that gets displayed
    const playfairSquare = [];

    // load the square
    for(let i=0; i<5; i++) {
        playfairSquare.push(playfairArr.slice(i * 5, i * 5 + 5));
    }
    
    let cipherLetterOne = undefined;
    let cipherLetterTwo = undefined;

    if(letterOne !== undefined && letterTwo !== undefined) {

        // change letters from j to i since we dont use j
        if(letterOne === 'j') letterOne = 'i';
        if(letterTwo === 'j') letterTwo = 'i'

        const cipherLetters = getCipherLetters(playfairSquare, letterOne, letterTwo);

        cipherLetterOne = cipherLetters[0];
        cipherLetterTwo = cipherLetters[1];
    }


    return (
        <div className="square">
          {Array.from({ length: playfairSquare.length }).map((_, row) => (
            

            <div className="row" key={row}>
              {playfairSquare[row]?.map((letter, index) => {
                let squareColor;
                let letterColor = "white";

                if(row === 0) {
                  if(index < keyword.length) {
                    letterColor = COLORS.myBlue;
                  }
                }
                
                if (letter === cipherLetterOne && cipherLetterOne === letterTwo) {
                  squareColor = `linear-gradient(135deg, ${COLORS.myGreen}  0%, ${COLORS.myGreen}  40%, ${COLORS.myOrange}, ${COLORS.myOrange})`;
                } else if (letter === cipherLetterTwo && cipherLetterTwo === letterOne) {
                  squareColor = `linear-gradient(135deg, ${COLORS.myGreen}  0%, ${COLORS.myGreen}  40%, ${COLORS.myOrange}, ${COLORS.myOrange})`;
                } else if (letter === letterOne || letter === letterTwo) {
                  squareColor = COLORS.myGreen;
                } else if (letter === cipherLetterOne) {
                  squareColor = COLORS.myOrange;
                } else if (letter === cipherLetterTwo) {
                  squareColor = COLORS.myOrange;
                } else {
                  squareColor = "transparent";
                }
      
                return (
                  <LetterSquare
                    key={index}
                    letter={letter}
                    squareColor={squareColor}
                    letterColor={letterColor}
                  />
                );
              })}
            </div>
))}
        </div>
      );
      
}

export default PlayfairSquare;