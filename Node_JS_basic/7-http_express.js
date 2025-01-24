const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  if (!database) {
    res.send('Cannot load the database');
    return;
  } else {
    try {
      const output = await countStudents(database);
      res.send(`This is the list of our students\n${output}`);
    } catch (error) {
      res.send(error.message);
    }
  }
});
app.listen(1245);

module.exports = app;
