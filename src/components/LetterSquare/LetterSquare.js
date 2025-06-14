import './LetterSquare.css'

// Get COLORS for js 
import { COLORS, setCssVariables } from '../../constants/colors';

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false, squareColor=COLORS.myBlue, letterColor="white"}) {

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
        </div>
    );
}

export default LetterSquare;