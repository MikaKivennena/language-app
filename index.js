const express = require('express')
const app = express()
const vocabulary = require('./vocabulary.js')
const database = require('./database.js')
const port = process.env.PORT || 3010;
const path = require("path");
var cors = require("cors");

app.use(cors());
app.use('/vocabulary', vocabulary)
app.use(express.static("frontend/build"));

// CORS
vocabulary.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/*", async (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/** Kill connection function that puts out console log messages */
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