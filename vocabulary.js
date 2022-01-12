const express = require('express')
const vocabulary = express.Router();
const Validator = require("jsonschema").Validator;
const valiObj = new Validator();
const database = require('./database.js')

/** Schema to make sure user gives a string. This could be improved, I just ran out of time. */
const schema = {
    properties: {
        finnishWord: { type: "string" },
        englishWord: { type: "string"},
        category: {type: "string"}
    }
};

vocabulary.use(express.json());

/** Gets all the word pairs from database */
vocabulary.get('/', async (req, res) => {
    const result = await database.getAll();
    res.status(200).send(result);
})

/**Gets word pairs by id */
vocabulary.get('/:id([0-9]+)', async (req, res) => {
    const result = await database.getById(req.params.id);
    res.status(200).send(result);
});
/** This adds new rows to table useing database function addRow */
vocabulary.post('/', async (req, res) => {
    if (valiObj.validate(req.body, schema)) {
        const newWord = {
            finnishWord: req.body.finnishWord,
            englishWord: req.body.englishWord,
            category: req.body.category,
        };
        const result = await database.addRow(newWord);
        res.status(201).send(result);
    } else {
        res.status(400).send('Please enter a word');
    }
});
/**Deletes word pairs from databse with given id */
vocabulary.delete('/:id([0-9]+)', async (req, res) => {
    let result = await database.deleteById(req.params.id);
    res.status(200).send(result);
});


module.exports = vocabulary