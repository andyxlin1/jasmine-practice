const repeatString = function(word, repeat) {
    let returnString = "";
    if (repeat < 0) {
        return 'ERROR';
    }
        for(let i = 0; i < repeat; i++) {
            returnString+= word;
        }
        return returnString;
    }

module.exports = repeatString
