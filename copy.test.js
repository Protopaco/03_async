
const { copy } = require('./copy.js');
const fsPromises = require('fs').promises;

const testFilePath = './test.txt';
const testData = "Hello World!";
const copiedFilePath = './copy-test.txt';


describe('tests copy.js', () => {

    afterEach(() => {
        return fsPromises.rm(testFilePath)
            .then(() => {
                return fsPromises.rm(copiedFilePath)
            })
    })

    it('checks test.txt and copied-test.txt', () => {
        return fsPromises.writeFile(testFilePath, testData)
            .then(() => {
                return copy(testFilePath, copiedFilePath)
            })
            .then(() => {
                return fsPromises.readFile(copiedFilePath, 'utf-8');
            })
            .then(data => {
                return expect(data).toEqual(testData);
            })
    })


})
