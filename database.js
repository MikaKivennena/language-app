const mysql = require('mysql');
require("dotenv").config();

/**
 * Createas mysql pool connection and gets the parameters from .env file for security reasons
 */
const connection = mysql.createPool({
  connectionLimit: 30,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
})

const database = "vocabulary";
/** Contains all connection functions using connection pool. */
let connectionFunctions = {
  connect: () => {
    const sqlConnect = (resolve, reject) => {
      connection.getConnection((error, success) => {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    };
    return new Promise(sqlConnect);
  },

  /** Shutdown connection */
  close: () => {
    const closeConnection = (resolve, reject) => {
      connection.close((error, success) => {
        if (error) {
          reject(error);
        } else {
          resolve(success);
        }
      });
    };
    return new Promise(closeConnection);
  },

  /**Get all the words from vocabulary table */
  getAll: () => {
    const sqlGetAll = (resolve, reject) => {
      connection.query(`SELECT * FROM ${database}`, (error, vocabulary) => {
        if(error) {
          reject(error);
        } else {
          resolve(vocabulary);
        }
        connectionFunctions.close;
      });
    };
    return new Promise(sqlGetAll);
  },

/** Gets word pairs from database by the given ID. Simple SQL query */
  getById: (id) => {
    const sqlGetById = (resolve, reject) => {
      connection.query(`SELECT * FROM vocabulary WHERE id = ${id}`, (error, vocabulary) => {
        if (error) {
          reject(error);
        } else {
          resolve(vocabulary);
        }
      });
    };
    return new Promise(sqlGetById);
  },

  /** Adds new row into the table with values given in frontend. */
  addRow: (vocabulary) => {
    sqlQuery = `INSERT INTO ${database} (finnishWord, englishWord, category) VALUES (?, ?, ?)`;
    const newWord = [vocabulary.finnishWord, vocabulary.englishWord, vocabulary.category];

    const addNew = (resolve, reject) => {
      connection.query(sqlQuery, newWord, (error, _vocabulary) => {
        if (error) {
          reject(error);
        } else {
          resolve(_vocabulary);
        }
      });
    };
    return new Promise(addNew);
  },

/** Delete a word pair by the user given id */
  deleteById: (id) => {
    const sqlDeleteById = (resolve, reject) => {
      connection.query(`DELETE FROM vocabulary WHERE id = ${id}`, (error, vocabulary) => {
        if (error) {
          reject(error);
        } else {
          resolve(vocabulary);
        }
      });
    };
    return new Promise(sqlDeleteById);
  },
};


module.exports = connectionFunctions