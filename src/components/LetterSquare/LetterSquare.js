import './LetterSquare.css'

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false, letterColor="blue"}) {

    const [bgColor, setBgColor] = useState('transparent');

    // console.log("IS PRESSED", isPressed);

    useEffect(() => {
        
        setBgColor(letterColor);
            
        
    }, [letterColor]);
    

    return (
        <h1 className="letter-square" style={{background: bgColor}}>{letter}</h1>
    );
}

export default LetterSquare;