const { writeFile, readFile, copyFile } = require('./utils.js');
const fsPromises = require('fs').promises;

const testFilePath = './test.txt';
const testData = "Hello World!";
const testData2 = "Goodbye World!";
const copiedFilePath = './copy-test.txt';

describe('tests writeFile', () => {
    it('checks test.txt to see if it contains "Hello World!"', async () => {

        await writeFile(testFilePath, testData);
        const returnedData = await fsPromises.readFile(testFilePath, 'utf-8');

        expect(returnedData).toEqual(testData);
    })

    it('checks test.txt to see if it constains "Goodbye World!"', async () => {
        await writeFile(testFilePath, testData2);
        const returnedData = await fsPromises.readFile(testFilePath, 'utf-8');

        expect(returnedData).toEqual(testData2);
    })

    afterEach(async () => {
        await fsPromises.rm(testFilePath);
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
    it('checks copy-test.txt to see if it contains "Hello World!"', async () => {

        await fsPromises.writeFile(testFilePath, testData);
        await copyFile(testFilePath);
        const returnedData = await fsPromises.readFile(copiedFilePath, 'utf-8');

        expect(returnedData).toEqual(testData);
    }
    )




})
