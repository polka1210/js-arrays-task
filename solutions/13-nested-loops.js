const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    const onlyArr1 = _.uniq(arr1);
    const onlyArr2 = _.uniq(arr2);
    const intersection = _.intersection(onlyArr1, onlyArr2);
    return intersection.length;
};

export default getSameCount;
// END