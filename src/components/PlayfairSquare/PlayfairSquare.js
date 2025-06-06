
import LetterSquare from '../LetterSquare/LetterSquare.js'

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

    const playfairSquare =[...keyword.split(''),...alphabetLeftovers]

    
    return (
        <div className="square">
            {
                Array.from({length: 6 }).map((_, i) => (
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
                ))
            }
        </div>
    );
}

export default PlayfairSquare;