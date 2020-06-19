const fs = require('fs');

const catFunc = function (fileName, doneFunc) {

  fs.readFile(process.cwd() + '/' + fileName, (err, data) => {

    if (err) {doneFunc(err)}
    else {
      doneFunc(data);
    }

  });

};

module.exports = catFunc;
