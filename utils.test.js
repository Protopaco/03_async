const { writeFile, readFile, copyFile } = require('./utils.js');
const fsPromises = require('fs').promises;

const testFilePath = './test.txt';
const testData = "Hello World!";
const testData2 = "Goodbye World!";
const copiedFilePath = './copy-test.txt';

describe('tests writeFile', () => {

    afterEach(async () => {
        await fsPromises.rm(testFilePath);
    })

    it('checks test.txt to see if it contains "Hello World!"', async () => {
        let returnedData;
        try {
            await fsPromises.writeFile(testFilePath, testData);
            returnedData = await fsPromises.readFile(testFilePath, 'utf-8');
        } catch (e) {
            throw (e.message)
        }
        expect(returnedData).toEqual(testData);
    })

    it('checks test.txt to see if it constains "Goodbye World!"', async () => {
        await fsPromises.writeFile(testFilePath, testData2);
        const returnedData = await fsPromises.readFile(testFilePath, 'utf-8');
        console.log(returnedData)
        expect(returnedData).toEqual(testData2);
    })


})

describe('tests readFile', () => {
    it('checks test.txt to see if it contains "Hello World!"', async () => {
        await fsPromises.writeFile(testFilePath, testData);
        const returnedData = await readFile(testFilePath);
        expect(returnedData).toEqual(testData);

    })
    it('checks test.txt to see if it contains "Goodbye World!"', async () => {
        await fsPromises.writeFile(testFilePath, testData2);
        const returnedData = await readFile(testFilePath);
        expect(returnedData).toEqual(testData2);

    })

    afterEach(async () => {
        await fsPromises.rm(testFilePath);
    })

})

describe('test copyFile', () => {

    afterEach(async () => {
        await fsPromises.rm(testFilePath);
        await fsPromises.rm(copiedFilePath);
    })

    it('checks copy-test.txt to see if it contains "Hello World!"', async () => {

        await fsPromises.writeFile(testFilePath, testData);
        await copyFile(testFilePath);
        const returnedData = await fsPromises.readFile(copiedFilePath, 'utf-8');

        expect(returnedData).toEqual(testData);
    });

    it('checks copy-test.txt to see if it contains "Goodbye World!"', async () => {

        await fsPromises.writeFile(testFilePath, testData2);
        await copyFile(testFilePath);
        const returnedData = await fsPromises.readFile(copiedFilePath, 'utf-8');

        expect(returnedData).toEqual(testData2);
    });




})
