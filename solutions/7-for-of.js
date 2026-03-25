// BEGIN
const calculateAverage = (temperatures) => {
    if (temperatures.length === 0) {
        return null;
    }
    let sum = 0;
    for (const temp of temperatures) {
        sum += temp;
    }
    const average = sum / temperatures.length;
    return average;
};

export default calculateAverage;
// END