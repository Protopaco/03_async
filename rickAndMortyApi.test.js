const fetch = require('node-fetch');
const { getCharacter } = require('./rickAndMortyApi.js')


characterId = '1';
expectedResult = {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human'
}

describe('tests getCharacter', () => {

    it('calls getCharacter, and expects to see name, status, & species', () => {
        return getCharacter(characterId)
            .then((result) => {
                expect(expectedResult).toEqual(result)
            })
    })


})