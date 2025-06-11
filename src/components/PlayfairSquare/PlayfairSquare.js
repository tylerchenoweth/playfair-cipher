
import LetterSquare from '../LetterSquare/LetterSquare.js'
import getCipherLetters from '../../utils/getCipherLetters.js'

import './PlayfairSquare.css';

import {useState} from 'react';

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
            {Array.from({length: playfairSquare.length}).map((_,i) => (
                <div className="row" key={i}>
                    {playfairSquare[i].map((letter, index) => (
                        // if a cipher and keyboard letter are the same letter
                        letter === cipherLetterOne && cipherLetterOne === letterTwo ? (
                            <LetterSquare letter={letter} letterColor={"linear-gradient(135deg, blue 0%, blue 50%, green 50%)"}/>
                        ):
                        // if a cipher and keyboard letter are the same letter
                        letter === cipherLetterTwo && cipherLetterTwo === letterOne ? (
                            <LetterSquare letter={letter} letterColor={"linear-gradient(135deg, blue 0%, blue 40%, green 55%, green 100%)"}/>
                        ):
                        // light up keyboard letters blue
                        letter === letterOne || letter === letterTwo ? (
                            <LetterSquare letter={letter} letterColor={"blue"}/>
                        // light up cipher letter one green
                        ): 
                        letter === cipherLetterOne && cipherLetterOne !== undefined  ? (
                            <LetterSquare letter={letter} letterColor={"green"}/>
                        // light up cipher letter two green
                        ): 
                        letter === cipherLetterTwo && cipherLetterTwo !== undefined ? (
                            <LetterSquare letter={letter} letterColor={"green"}/>
                        // light up keyboard letter 'i' if j is pressed
                        ): 
                        (
                            <LetterSquare letter={letter} letterColor={"transparent"}/>
                        )
                    ))}
                </div>
            ))}
            
        </div>
    );
}

export default PlayfairSquare;