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
app.use(express.json()); //wont forget this one, spent far too long trying to figure out why POSTs wouldn't work and later why req.body came back undefined

app.get('/', (req, res) => {
    db('items')
        .select('*')
        .then(data => res.json(data))
})

app.post('/login', (req, res) => {
    db('users')
        .select('*')
        .where('users.username', req.body.username)
        .where('users.password', req.body.password)
        .then(data => res.json(data))
        .catch(err => res.json({ message: 'no' }))
})

app.post('/signup', (req, res) => {
    db('users')
        .insert(req.body)
        .then(response => res.json({ message: 'New User Added!' }))
        .catch(err => res.json({ message: 'no' }))
})

app.post('/additem', (req, res) => {
    db('items')
        .insert(req.body)
        .select('*')
        .where('userid', req.body.userid)
        .where('itemname', req.body.itemname)
        .where('description', req.body.description)
        .where('quantity', req.body.quantity)
        .returning('id', 'userid', 'itemname', 'description', 'quantity')
        .then(data => res.json(data))
        .catch(err => res.json({ message: 'no' }))
})

app.patch('/itemdetails', (req, res) => {
    db('items')
        .update(req.body)
        .where('id', req.body.id)
        .then(response => res.json({ message: 'item updated!' }))
        .catch(err => res.json({ message: 'no' }))
    })

app.delete('/itemdetails', (req, res) => {
    db('items')
        .del()
        .where('id', req.body.id)
        .then(response => res.json({ message: 'Item deleted!' }))
        .catch(err => res.json({ message: 'no' }))
})






app.listen(port, () => console.log(`backend listening at http://localhost/${port}`))