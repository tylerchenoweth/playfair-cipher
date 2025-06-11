function getRowCol(square, letter) {
    let row = undefined;
    let col = undefined;
    
    if(letter === 'j') {
        letter = 'i';
    }

    for(let r=0; r<square.length; r++) {
        
        const c = square[r].indexOf(letter);
        
        if(c !== -1) {
            row = r;
            col = c;
        }
    }

    return [row, col];
}



export default function getCipherLetters(square, letterOne, letterTwo) {

    // letterOne = letterOne.toLowerCase();
    // letterTwo = letterTwo.toLowerCase();

    let rowCol = getRowCol(square, letterOne);
    const row1 = rowCol[0];
    const col1 = rowCol[1];
    
    rowCol = getRowCol(square, letterTwo);
    const row2 = rowCol[0];
    const col2 = rowCol[1];

    // console.log("row 1 ===> ", square[row1]);
    // console.log("row 2 ===> ", square[row2]);
    
    // return cipher letters
    if(row1 === row2) {
        // if the letters are in the same row
        // console.log("===> ", row1);
        // console.log("===> ", row2);
        // console.log("===> ", square[row1]);
        // console.log("===> ", square[row2]);

        return [ square[row1][(col1+1)%5], square[row2][(col2+1)%5] ]
    } else if(col1 === col2) {
        // if the letters are in the same column
        return [ square[(row1+1)%5][col1], square[(row2+1)%5][col2] ]
    } else {
        // if the letters have different rows and columns
        // const cipher1 = square[row1][col2];
        // const cipher2 = square[row2][col1];

        return [ square[row1][col2], square[row2][col1] ]
    }
      
}




