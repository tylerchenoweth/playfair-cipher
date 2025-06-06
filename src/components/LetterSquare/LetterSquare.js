import './LetterSquare.css'

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false}) {

    const [bgColor, setBgColor] = useState('transparent');

    // console.log("IS PRESSED", isPressed);

    useEffect(() => {
        if(isPressed === true) {
            setBgColor('blue');
            
        } 
        else {
            setBgColor('transparent');
        }
    })
    

    return (
        <h1 className="letter-square" style={{backgroundColor: bgColor}}>{letter}</h1>
    );
}

export default LetterSquare;