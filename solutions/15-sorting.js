// BEGIN
const bubbleSort = (arr) => {
    const sorted = [...arr];
    const n = sorted.length;
    for (let x = 0; x < n - 1; x++) {
        for (let y = 0; y < n - 1 - x; y++) {
            if (sorted[y] > sorted[y + 1]) {
                const temp = sorted[y];
                sorted[y] = sorted[y + 1];
                sorted[y + 1] = temp;
            }
        }
    }
    return sorted;
};

export default bubbleSort;
// END