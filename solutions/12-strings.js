// BEGIN
const makeCensored = (sentence, stopWords) => {
    const words = sentence.split(' ');
    const result =[];
    for (let x = 0; x < words.length; x++) {
        const word = words[x];
        if (stopWords.includes(word)) {
            result.push('$#%!');
        } else {
            result.push(word);
        }
    }
    return result.join(' ');
};

export default makeCensored;
// END