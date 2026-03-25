// BEGIN
const addPrefix = (items, prefix) => {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(`${prefix} ${items[i]}`);
    }
    return result;
};

export default addPrefix;
// END