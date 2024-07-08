const router = require('express').Router();
const Menu = require('../models/menu');
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

// const uri = 'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority;'
// const db = MongoClient.connect(uri)


router.get('/', async (req, res) => {
    const Menus = await Menu.find({})
        .then((data => {
            // console.log(res, 'menu-res');
            res.status(200).send(data)
        }))
        .catch((err => {
            console.log(err, 'err');
            res.status(500).send(err)
        }))
})
module.exports = router