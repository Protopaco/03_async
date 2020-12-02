const { writeFile } = require('./utils.js');
const fsPromises = require('fs').promises;


describe('tests writeFile', () => {
    it('checks test.txt to see if it contains "Hello World!"', async () => {
        const testData = "Hello World!";

        await writeFile();
        const returnedData = await fsPromises.readFile('./test.txt', 'utf-8');

        expect(returnedData).toEqual(testData);
    })
})
