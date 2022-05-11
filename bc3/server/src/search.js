const getData = require('./database');

/**
 * Task Server/3:
 * This function should return the data filtered by the term and the filter values.
 */
module.exports = function search(term, filter) {
    return getData().then(data => {
        if (filter.wood === 'All' && filter.core === 'All' && 
        filter.length === 'All' && filter.flexibility === 'All' &&  !term) return data;
        return data.filter(item => {
            return (
                item.owner.toLowerCase().includes(term.toLowerCase()) && 
                    (filter.core === 'All' || item.core.normalize() === filter.core.normalize()) &&
                    (filter.length === 'All' || item.length.normalize() === filter.length.normalize()) &&
                    (filter.flexibility === 'All' || item.flexibility.toLowerCase() === filter.flexibility.toLowerCase()) &&
                    (filter.wood === 'All' || item.wood.normalize() === filter.wood.normalize())
            );
        });


    });
};
