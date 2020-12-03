const { transform } = require('./transform.js');
const fsPromises = require('fs').promises;

const testFilePath = './test.txt';
const testData = "Hello World!";

describe('tests transform.js', () => {
    afterEach(async () => {
        await fsPromises.rm(testFilePath);
    })

    it('checks test.txt, and transformed string', () => {
        return fsPromises.writeFile(testFilePath, testData)
            .then(() => {
                return transform(testFilePath)
            })
            .then(data => {
                return expect(data).toEqual('!DLRO OLLE')
            })


    })


})