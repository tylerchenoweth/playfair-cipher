
import isValidKeyword from "../../utils/isValidKeyword.js"

import "./KeywordInput.css"


function KeywordInput({value, onChange}) {

    const handleInput = (e) => {
        let keyword = e.target.value;

        if(isValidKeyword(keyword) === true) onChange(e.target.value);
    };
      
    return (
        <div>
            <input type="text" id="name" value={value} onChange={handleInput} />
            
        </div>
    )

}

export default KeywordInput