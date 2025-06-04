
import LetterSquare from '../LetterSquare/LetterSquare.js'

import './Board.css';

function Board() {

    const alphabet = Array.from({ length: 26 }, (_, i) => {
            if(i !== 9) {

                return String.fromCharCode(97 + i)
            }
        }
    ).filter(Boolean);

    
    return (
        <div className="board">
            {
                Array.from({length: 6 }).map((_, i) => (
                    <div className="row">
                        {
                            alphabet.slice(i*5,i*5+5).map((letter, index) => (
                                <LetterSquare letter={letter} />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Board;