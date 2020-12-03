const fetch = require('node-fetch');
const { getCharacter } = require('./rickAndMortyApi.js')


const characterId = 1;
const expectedResult = {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human'
}

const idArray = [1, 2, 3];
expectedArrayResult[
    {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
    },
    {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human'
    },
    {
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human'
    },
]



describe('tests getCharacter', () => {

    it('calls getCharacter, and expects to see name, status, & species', () => {
        return getCharacter(characterId)
            .then((result) => {
                expect(expectedResult).toEqual(result)
            })
    })
})

describe('tests getManyCharacters', () => {
    it('calls getManyCharacters, and expects to see name, status & species for each', () => {
        return getManyCharacters(idArray)
            .then((result) => {
                expect(expectedArrayResult).toEqual(result)
            })
    })
})