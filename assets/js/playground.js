const isPallindrome = (str) => {
    if (str.length === 0) return true;
    return str === reverseString(str);
}

const reverseString = (str) => {
    if (str.length === 0) return '';
    const stringInArray = [].map.call(str, (char) => char);
    return stringInArray.pop() + reverseString(stringInArray);
}

console.log(isPallindrome('hellolleh'));