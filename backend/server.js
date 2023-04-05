const express = require('express');
const cors = require('cors');
const app = express();
const { default: knex } = require('knex');
const knexfile = require('./knexfile.js');
const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];
const db = knex(config);
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    db('items')
    .select('*')
    .then(data => res.json(data))
})

app.post('/signup', (req, res) => {
    db('users')
    .insert(req.body)
    .then(response => res.json({message: 'New User Added!'}))
    .catch(err =>res.json({message: 'no'}))
})




app.listen(port, () => console.log(`backend listening at http://localhost/${port}`))