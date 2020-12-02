const fsPromises = require('fs').promises;

const writeFile = async () => {
    const data = "Hello World!";
    await fsPromises.writeFile('./test.txt', data)
};



module.exports = { writeFile };