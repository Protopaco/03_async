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
        return fsPromises.readFile(filePath, 'utf-8');
    }
    catch (e) {
        throw e.message;
    }
}

const copyFile = async (filePath) => {
    const copiedFilePath = returnCopiedFilePath(filePath);

    const returnedData = await fsPromises.readFile(filePath, 'utf-8');
    await fsPromises.writeFile(copiedFilePath, returnedData);
}

const returnCopiedFilePath = (filePath) => {
    const fileNamePos = filePath.lastIndexOf('/');
    const splitFilePath = filePath.split('')
    splitFilePath.splice(fileNamePos + 1, 0, 'copy-')
    return splitFilePath.join('');
}



module.exports = { writeFile, readFile, copyFile };