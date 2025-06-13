
function isValidKeyword(keyword) {
    if(keyword === "") return true;
    if(!(/^[a-zA-Z]+$/.test(keyword))) return false;
    if(keyword.length > 5) return false;
    if(keyword.includes('j')) return false;

    return new Set(keyword).size === keyword.length;
}

export default isValidKeyword;