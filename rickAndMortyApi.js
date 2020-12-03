const fetch = require('node-fetch');

url = "https://rickandmortyapi.com/api/character/"
// const getCharacter = (characterId) => {
//     return fetch(url + characterId)
//         .then((returnedObject) => {
//             return returnedObject.json()
//         })
//         .then((object) => {
//             const { name, status, species } = object
//             return { name, status, species }

//         })

// }

const getCharacter = async (characterId) => {
    const returnedObject = await fetch(url + characterId);
    const { name, status, species } = await returnedObject.json();
    return { name, status, species };
}
module.exports = { getCharacter }