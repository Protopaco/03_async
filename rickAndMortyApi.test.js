const fetch = require('node-fetch');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi.js')

jest.mock('node-fetch');


const characterId = 1;
const expectedResult = {
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human'
}

const idArray = [1, 2, 3];
expectedArrayResult = [
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

        fetch.mockResolvedValueOnce(Promise.resolve({
            json: () => {
                return {
                    name: 'Rick Sanchez',
                    status: 'Alive',
                    species: 'Human'
                }
            }
        }));


        return getCharacter(characterId)
            .then((result) => {
                expect(expectedResult).toEqual(result)
            })
    })
})

// describe('tests getManyCharacters', () => {
//     it('calls getManyCharacters, and expects to see name, status & species for each', () => {
//         return getManyCharacters(idArray)
//             .then((result) => {
//                 return expect(expectedArrayResult).toEqual(result)
//             })
//     })
// })

describe('tests getManyCharacters', () => {
    it('calls getManyCharacters, and expects to see name, status & species for each', async () => {

        fetch.mockResolvedValueOnce(Promise.resolve({
            json: () => {
                return {
                    name: 'Rick Sanchez',
                    status: 'Alive',
                    species: 'Human'
                }
            }
        }));
        fetch.mockResolvedValueOnce(Promise.resolve({
            json: () => {
                return {
                    name: 'Morty Smith',
                    status: 'Alive',
                    species: 'Human'
                }
            }
        }));
        fetch.mockResolvedValueOnce(Promise.resolve({
            json: () => {
                return {
                    name: 'Summer Smith',
                    status: 'Alive',
                    species: 'Human'
                }
            }
        }));
        return getManyCharacters(idArray)
            .then((result) => {
                return expect(result).toEqual(expectedArrayResult)
            })
    })
})