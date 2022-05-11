const express = require('express');
// const database = require('./database')
const search = require('./search');
const getOptions = require('./option');
const { options } = require('nodemon/lib/config');
const path = require('path');


const app = express();
app.use(express.static('dist/client'));


const verify = (req, res, next) => {
    next(req.headers.bootcamp === 'BC3' ? undefined : new Error('client not verified'));
};

// app.get('/api/wands/:term?',verify, (req, res) => {
app.get('/api/wands/:term?', (req, res) => {
    /**
     * Task Server/4:
     * Fix me
     */

    const searchTerm = req.query.term;
    const { wood, core, length, flexibility } = req.query;
    const queryFilter = { wood, core, length, flexibility };
    search(searchTerm, queryFilter).then(wands => {
        res.send(wands);
    });
});

// app.get('/api/options/:type', verify, (req, res) => {
app.get('/api/options/:type', (req, res) => {
    /**
     * Task Server/4:
     * Fix me
     */
    const optionsType = req.params.type;
    getOptions(optionsType).then(options => {
        res.send(options);
    });
});


// app.listen(3000, '0.0.0.0', () => {
//     console.log('Server is listening to http://0.0.0.0:3000/');
// });

const port = process.env.PORT || 3000;
app.get('/**', (req, res) => {
 res.sendFile(path.join(__dirname, 'dist/client/', 'index.html'));
})
app.listen(port, () => {
 console.log(`App listening on port ${port}!`)
});


