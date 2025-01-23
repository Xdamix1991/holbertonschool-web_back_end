const http = require('http');

// create a server object:
const app = http.createServer((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});
app.listen(1245);
module.exports = app;
