const fsPromises = require('fs').promises;

const writeFile = async (filePath, data) => {
    try {
        await fsPromises.writeFile(filePath, data);
    }
    catch (e) {
        throw e.message;
    }
};

const readFile = async (filePath) => {
    try {
        console.log(filePath)
        return fsPromises.readFile(filePath, 'utf-8');
    }
    catch (e) {
        throw e.message;
    }
}



module.exports = { writeFile, readFile };