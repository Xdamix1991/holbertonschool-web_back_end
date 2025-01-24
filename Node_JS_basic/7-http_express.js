const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.write('This is the list of our students');
  if (!database) {
    res.end('Cannot load the database');
  } else {
    try {
      const output = await countStudents(database);
      res.send(output);
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  }
});
app.listen(1245);

module.exports = app;
