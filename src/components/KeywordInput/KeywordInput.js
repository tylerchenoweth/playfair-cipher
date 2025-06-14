
import isValidKeyword from "../../utils/isValidKeyword.js"

import "./KeywordInput.css"


function KeywordInput({value, onChange}) {

    const handleInput = (e) => {
        let keyword = e.target.value.toLowerCase();

        if(isValidKeyword(keyword) === true) onChange(keyword);
    };
      
    return (
        <div>
            <input type="text" placeholder="enter keyword" id="name" value={value} onChange={handleInput} />   
        </div>
    )

}

export default KeywordInput