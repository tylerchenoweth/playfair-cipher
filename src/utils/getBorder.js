export default function getBorder(isSquare, row, col) {

    let border;

    const inW = "3px"; 
    const outW = "6px"; 

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


    return border;
}