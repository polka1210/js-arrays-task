// BEGIN
const swap = (arr) => {
    if (arr.length <= 1) return [...arr];

    const result = [...arr];
    [rasult[0], result[result.lengh - 1]] = [result[result.length - 1], result[0]];

    return result;
};

export default swap;
// END