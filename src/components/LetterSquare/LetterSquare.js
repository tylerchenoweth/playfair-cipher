import './LetterSquare.css'

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false, squareColor="blue"}) {

    const [bgColor, setBgColor] = useState('transparent');

    // console.log("IS PRESSED", isPressed);

    useEffect(() => {
        
        setBgColor(squareColor);
            
        
    }, [squareColor]);
    

    return (
        <div className="letterSquare" style={{background: bgColor}}> 
            {letter}
            {/* <h1 className="letter" style={{background: bgColor}}>{letter}</h1> */}
        </div>
    );
}

export default LetterSquare;