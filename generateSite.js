
// This js handles the copying and writing of the index.html and style.css files

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
        message: 'File has been created!'
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
          message: 'Stylesheet has been created!'
        });
      });
    });
  };
  module.exports = {copyFile, writeFile};