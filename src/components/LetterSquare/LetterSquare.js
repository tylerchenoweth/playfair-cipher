import './LetterSquare.css'

// Get COLORS for js 
import { COLORS } from '../../constants/colors';

import {useState, useEffect} from 'react';

function LetterSquare( {letter, isPressed=false, squareColor=COLORS.myBlue, letterColor="white", border="3px 3px 3px 3px"}) {

    const [bgColor, setBgColor] = useState('transparent');
    const bw = border;

    useEffect(() => {
        
        setBgColor(squareColor);
            
    }, [squareColor]);
    

    return (
        <div className="letterSquare" style={{background: bgColor, color: letterColor, borderWidth: bw}}> 
            {letter}
        </div>
    );
}

export default LetterSquare;