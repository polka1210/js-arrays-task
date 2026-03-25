// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions.length === 0) {
        return '';
    }
    let result = '<dl>';
    for (let x = 0; x < definitions.length; x++) {
        const definition = definitions[x];
        const term = definition[0];
        const description = definition[1];
        result += `<dt>${term}</dt><dd>${description}</dd>`;
    }
    result += '</dl>';
    return result;
};

export default buildDefinitionList;
// END