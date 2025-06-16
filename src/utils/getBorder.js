export default function getBorder(isKeyboard, row, col) {

    let border;

    const inW = "2px"; 
    const outW = "4px"; 


    if(isKeyboard === true) {


        if(row === 0) {
            if(col === 0) {
                border = `${outW} ${inW} ${outW} ${outW}`; 
            } else if(col === 9) {
                border = `${outW} ${outW} ${outW} ${inW}`;
            } else {
                border = `${outW} ${inW} ${outW} ${inW}`;
            }
        } else {
            if(col === 0) {
                border = `0 ${inW} ${outW} ${outW}`;
            } else if(row === 1 && col === 8) {
                border = `0 ${outW} ${outW} ${inW}`;
            } else if(row === 2 && col === 6) {
                border = `0 ${outW} ${outW} ${inW}`;
            } else {
                border = `0 ${inW} ${outW} ${inW}`;
            }
        }
    } else {
        if (row === 0) {
            if (col === 0) {
                border = `${outW} ${inW} ${inW} ${outW}`;
            } else if (col === 4) {
                border = `${outW} ${outW} ${inW} ${inW}`;
            } else {
                border = `${outW} ${inW} ${inW} ${inW}`;
            }
        } else if (row === 4) {
            if (col === 0) {
                border = `${inW} ${inW} ${outW} ${outW}`;
            } else if (col === 4) {
                border = `${inW} ${outW} ${outW} ${inW}`;
            } else {
                border = `${inW} ${inW} ${outW} ${inW}`;
            }
        } else if (col === 0) {
            border = `${inW} ${inW} ${inW} ${outW}`;
        } else if (col === 4) {
            border = `${inW} ${outW} ${inW} ${inW}`;
        } else {
            border = `${inW} ${inW} ${inW} ${inW}`;
        }
    }


    return border;
}