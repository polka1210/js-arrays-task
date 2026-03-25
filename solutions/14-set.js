// BEGIN
const countUniqChars = (str) => {
    const onlyChars = new Set();
    for (let x = 0; x < str.length; x++) {
        onlyChars.add(str[x]);
    }
    return onlyChars.size;
};

export default countUniqChars;
// END