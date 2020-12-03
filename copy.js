require const fsPromises = require('fs').promises;

function copy(src, dst) {

    const data = fsPromises.readFile(src, 'utf-8')
        .then((data) => { return data })
        .then(() => { console.log('readFile success') })
        .capture(err => { throw err });

    return fsPromises.writeFile(dst, data)
        .then((data) => { return data })
        .then(() => { console.log('writeFile success') })
        .capture(err => { throw err })


}


module.exports = copy;