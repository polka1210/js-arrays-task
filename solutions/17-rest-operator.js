// BEGIN
const getMax = (arr) => {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let x =1; x < arr.length; x++) {
        if (arr[x] > max) {
            max = arr[x];
        }
    }
    return max;
};

export { getMax };
// END