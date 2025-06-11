
function isValidKeyword(keyword) {
    if(keyword.length > 5) return false;
    return new Set(keyword).size === keyword.length;
}

export default isValidKeyword;