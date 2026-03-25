// BEGIN
const calculateSum = (numbers) => {
    let sum = 0;
    for (let x = 0; x < numbers.length; x++) {
       if (numbers[x] % 3 === 0) {
        sum += numbers[x]; 
    }
}
return sum;
};
export { calculateSum };
// END