const fs = require('fs');

const promisify = ... 

const stat = promisify(fs.stat);

stat('temp')
  .then((stats) => {
    const msg = stats.isFile() ? "Is a file" : "Not a file";
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = promisify;
