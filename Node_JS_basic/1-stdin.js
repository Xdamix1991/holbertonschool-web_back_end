function x() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name.toString()}`);
  });
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
}
module.exports = x;

if (require.main === module) {
  x();
}