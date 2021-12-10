const mysql = require('mysql');
require("dotenv").config();

const connection = mysql.createPool({
  connectionLimit: 30,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB
})
const sqlDatabase = 'vocabulary';

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

  getAll: () => {
    const sqlGetAll = (resolve, reject) => {
      connection.query(`SELECT * FROM vocabulary`, (error, vocabulary) => {
        if (error) {
          reject(error);
        } else {
          resolve(vocabulary);
        }
        connectionFunctions.close;
      });
    };
    return new Promise(sqlGetAll);
  },

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

  addRow: (vocabulary) => {
    sqlQuery = `INSERT INTO ${sqlDatabase} (finnishWord, englishWord, category) VALUES (?, ?, ?)`;
    const newWord = [vocabulary.finnishWord, vocabulary.englishWord, vocabulary.category];

    const addNew = (resolve, reject) => {
      connection.query(sqlQuery, newWord, (error, vocabulary) => {
        if (error) {
          reject(error);
        } else {
          resolve(vocabulary);
        }
      });
    };
    return new Promise(addNew);
  },


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