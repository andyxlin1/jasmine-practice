const reverseString = function(word) {
    let returnString = '';
    for (let i = word.length - 1; i >= 0; i--) {
        returnString += word.charAt(i);
    }
    return returnString;
}

module.exports = reverseString
