// BEGIN
const getSameParity = (numbers) => {
    if (numbers.length === 0) {
        return [];
    }
    const isFirstEven = Math.abs(numbers[0]) % 2 === 0;
    const result = [];
    for (let x = 0; x < numbers.length; x++) {
        const currentNumber = numbers[x];
        const isCurrenteven = Math.abs(currentNumber) % 2 === 0;
        if (isCurrenteven === isFirstEven) {
            result.push(currentNumber);
        }
    }
    return result;
};

export default getSameParity;
// END