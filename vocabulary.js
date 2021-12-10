const express = require('express')
const vocabulary = express.Router();
const Validator = require("jsonschema").Validator;
const valiObj = new Validator();
const database = require('./database.js')

const schema = {
    properties: {
        finnishWord: { type: "string" },
        englishWord: { type: "string"},
        category: {type: "string"}
    }
};


vocabulary.use(express.json());

vocabulary.get('/', async (req, res) => {
    const result = await database.getAll();
    res.status(200).send(result);
});

vocabulary.get('/:id([0-9]+)', async (req, res) => {
    const result = await database.getById(req.params.id);
    res.status(200).send(result);
});

vocabulary.post('/', async (req, res) => {
    if (valiObj.validate(req.body, schema)) {
        const newWord = {
            finnishWord: req.body.finnishWord,
            englishWord: req.body.englishWord,
        };
        const result = await database.addRow(newWord);
        res.status(201).send(result);
    } else {
        res.status(400).send('Please enter a word');
    }
});

vocabulary.delete('/:id([0-9]+)', async (req, res) => {
    let result = await database.deleteById(req.params.id);
    res.status(200).send(result);
});


module.exports = vocabulary