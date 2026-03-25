// BEGIN
const reverse = (arr) => {
    for (let x = 0; x < Math.floor(arr.length / 2); x++) {
        const y = arr.length - 1 - x;
        const temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    return arr;
};

export default reverse;
// END