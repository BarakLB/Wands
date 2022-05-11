const data = require('./data.json');


/**
 * Task Server/1:
 * This function should return the content of the "data.json" file as array of objects (as-is).
 * The function should return a promise (do not remove the "async" keyword in front of the function).
 */
module.exports = async function getData() {
    return new Promise((resolve, reject) => {
        return resolve(data);
    });
};
