const fsPromises = require('fs').promises;

const copy = (src, dst) => {

    return fsPromises.readFile(src, 'utf-8')
        .then(data => {
            return fsPromises.writeFile(dst, data)
        })
        .catch(err => console.log(err));

}


module.exports = { copy };