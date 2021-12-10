const express = require('express')
const app = express()
const vocabulary = require('./vocabulary.js')
const database = require('./databaseFunctions.js')

app.use('/vocabulary', vocabulary)
app.use(express.static("frontend/build"));

// CORS
vocabulary.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const server = app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});


const killConnection = () => {
  console.log("Closing connection..");
  server.close(() => {
    console.log("Connection to server closed");
    database.close(() => {
      console.log("Connection to database closed");
      process.exit(0);
    })
  })
}

process.on("SIGIN", killConnection);
process.on("SIGTERM", killConnection);