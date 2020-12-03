
const fsPromises = require('fs').promises;

const writeFile = (filePath, data) => {

    return fsPromises.writeFile(filePath, data)
        // .then(() => console.log('done'))
        .catch(err => console.log(err));
}

const readFile = (filePath) => {

    return fsPromises.readFile(filePath, 'utf-8')
        .then((data) => { return data })
        .catch(err => console.log(err))
}

const copyFile = (filePath) => {

    const copiedFilePath = returnCopiedFilePath(filePath);

    return fsPromises.readFile(filePath, 'utf-8')
        .then(data => {
            return fsPromises.writeFile(copiedFilePath, data)
        })
        .catch(err => console.log(err));

}

const returnCopiedFilePath = (filePath) => {
    const fileNamePos = filePath.lastIndexOf('/');
    const splitFilePath = filePath.split('')
    splitFilePath.splice(fileNamePos + 1, 0, 'copy-')
    return splitFilePath.join('');
}

module.exports = { writeFile, readFile, copyFile };