import './LetterSquare.css'

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false, squareColor="blue", letterColor="white"}) {

    const [bgColor, setBgColor] = useState('transparent');
    const [fontColor, setFontColor] = useState('white');

    // console.log("IS PRESSED", isPressed);

    useEffect(() => {
        
        setBgColor(squareColor);
        setFontColor(letter);
            
        
    }, [squareColor]);
    

    return (
        <div className="letterSquare" style={{background: bgColor, color: letterColor}}> 
            {letter}
            {/* <h1 className="letter" style={{background: bgColor}}>{letter}</h1> */}
        </div>
    );
}

export default LetterSquare;