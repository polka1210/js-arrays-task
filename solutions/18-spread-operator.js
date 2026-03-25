// BEGIN
const flatten = (arr) => {
    const result = [];
    for (let x = 0; x < arr.length; x++) {
        const item = arr[x];
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    return result;
};

export { flatten };
// END