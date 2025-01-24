const csvParser = require('csv-parser');
const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let countt = 0;
    let countCs = 0;
    let countSwe = 0;
    const listCs = [];
    const listSwe = [];
    fs.createReadStream(path)
      .on('error', () => {
        reject(new Error('Cannot load the database'));
      })
      .pipe(csvParser())
      .on('data', (row) => {
        // Vérifier que la ligne n'est pas vide
        if (row.firstname && row.field) {
          countt += 1;
          if (row.field === 'CS') {
            countCs += 1;
            listCs.push(row.firstname);
          }
          if (row.field === 'SWE') {
            countSwe += 1;
            listSwe.push(row.firstname);
          }
        }
      })
      .on('end', () => {
        const output = [
          `Number of students: ${countt}`,
          `Number of students in CS: ${countCs}. List: ${listCs.join(', ')}`,
          `Number of students in SWE: ${countSwe}. List: ${listSwe.join(', ')}`,
        ].join('\n');
        console.log(output); // Sortie pour terminal
        resolve(output); // Retourne la sortie dans la promesse
      });
  });
}
module.exports = countStudents;
