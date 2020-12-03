const fsPromises = require('fs').promises;

const transform = (src) => {
    return fsPromises.readFile(src, 'utf-8')
        .then((data) => {
            return transformData(data)
        })


}

const transformData = (data) => {
    const noUpperCase = data.replace(/[A-Z]+/g, '');
    const allUpperCase = noUpperCase.toUpperCase();
    const upperCaseArray = allUpperCase.split('');
    const reversedUpperCaseArray = upperCaseArray.reverse();
    const joinedReversedUpperCaseArray = reversedUpperCaseArray.join('');
    return joinedReversedUpperCaseArray;
}

module.exports = { transform };
