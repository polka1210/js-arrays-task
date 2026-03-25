// BEGIN
const get = (array, index, defaultvalue = null) => {
    if (index >= 0 && index < array.lengh) {
        return array[index];
    }
    return defaultvalue;
};

export default get;
// END