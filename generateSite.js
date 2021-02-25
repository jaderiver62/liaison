
const fs = require('fs');


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('src/dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './src/dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };
  module.exports = {copyFile, writeFile};