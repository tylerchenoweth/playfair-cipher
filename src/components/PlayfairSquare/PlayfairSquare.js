
import LetterSquare from '../LetterSquare/LetterSquare.js'
import getCipherLetters from '../../utils/getCipherLetters.js'

import './PlayfairSquare.css';

function PlayfairSquare({letterOne = undefined, letterTwo = undefined}) {

    const keyword = 'death';

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

    const playfairSquare = [];
    for(let i=0; i<5; i++) {
        playfairSquare.push(playfairArr.slice(i * 5, i * 5 + 5));
    }
    
    let cipherLetterOne = undefined;
    let cipherLetterTwo = undefined;

    if(letterOne !== undefined && letterTwo !== undefined) {
        const cipherLetters = getCipherLetters(playfairSquare, letterOne, letterTwo);
        
        console.log(letterOne, " -> ", cipherLetters[0]);
        console.log(letterTwo, " -> ", cipherLetters[1]);

        cipherLetterOne = cipherLetters[0];
        cipherLetterTwo = cipherLetters[1];
    }

    console.log(cipherLetterOne);
    console.log(cipherLetterTwo);

    console.log(typeof(cipherLetterTwo));

    return (
        <div className="square">
            
            {/* {Array.from({length: 6 }).map((_, i) => (
                <div className="row">
                    {
                        playfairSquare.slice(i*5,i*5+5).map((letter, index) => (
                            letter === letterOne || letter === letterTwo ? (
                                <LetterSquare letter={letter} isPressed={true}/>
                            ): letter === 'i' && (letterOne ==='j' || letterTwo ==='j') ? (
                                <LetterSquare letter={letter} isPressed={true}/>
                            ):(
                                <LetterSquare letter={letter} isPressed={false}/>
                            )
                        ))
                    }
                </div>
            ))} */}

            {Array.from({length: playfairSquare.length}).map((_,i) => (
                <div className="row">
                    {playfairSquare[i].map((letter, index) => (
                        
                        letter === letterOne || letter === letterTwo ? (
                            <LetterSquare letter={letter} isPressed={true}/>
                        ): letter === cipherLetterOne && cipherLetterOne !== undefined  ? (
                            <LetterSquare letter={letter} isPressed={true}/>
                        ): letter === cipherLetterTwo && cipherLetterTwo !== undefined ? (
                            <LetterSquare letter={letter} isPressed={true}/>
                        ): letter === 'i' && (letterOne ==='j' || letterTwo ==='j') ? (
                            <LetterSquare letter={letter} isPressed={true}/>
                        ): letter === 'i' && (cipherLetterOne ==='j' || cipherLetterTwo ==='j') ? (
                            <LetterSquare letter={letter} isPressed={true}/>
                        ):(
                            <LetterSquare letter={letter} isPressed={false}/>
                        )
                    ))}
                </div>
            ))}
            
        </div>
    );
}

export default PlayfairSquare;