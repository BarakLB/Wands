const getData = require('./database');

/**
 * Task Server/2:
 * This function should return the data sorted and without duplications
 */
module.exports = function getOptions(type) {
    return getData()
        .then(data => data.map(item => {
            return item[type];
        })).then(opts=> {
            return [...new Set(opts)]
        });
};
