const express = require('express');

const app = express();
const databaseName = process.argv[2];
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  if (!databaseName) {
    res.end('No database provided\n');
    return;
  }
  try {
    const output = await countStudents(databaseName);
    res.end(output);
  } catch (error) {
    res.end(error.message);
  }
});
app.listen(1245);
module.exports = app;
