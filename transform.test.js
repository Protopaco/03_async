const { transform } = require('./transform.js');
const fsPromises = require('fs').promises;

const testFilePath = './test.txt';
const testData = "Hello World!";

describe('tests transform.js', () => {
    afterEach(async () => {
        await fsPromises.rm(testFilePath);
    })

    it('checks test.txt, and returns stuff', () => {
        return fsPromises.writeFile(testFilePath, testData)
            .then(() => {
                return transform(testFilePath)
            })
            .then(data => {
                console.log(data)
            })


    })


})