// BEGIN
const calculateSum = (numbers) => {
    let sum = 0;
    for (let x = 0; x < numbers.length; x++) {
        const currentNumber = numbers[x];
       if (currentNumber > 10) {
        sum += currentNumber; 
    }
}
return sum;
};
export { calculateSum };
// END