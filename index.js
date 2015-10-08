'use strict';

const fs   = require('fs');
const dss  = require('dss');
const glob = require('glob');

class Doki {
  constructor(files) {
    this.files = files;
    this.parsedArray = [];
  }

  parse(destFile, options) {
    let globs = glob.sync(this.files);
    options || {};

    // Check if has any file
    if (globs.length === 0) {
      console.error(`Has no file in ${this.files}!`);
      process.exit();
    }

    globs.forEach((file) => {
      let fileContent = fs.readFileSync(file);
      dss.parse(fileContent, options, (parsedObject) => {
        this.parsedArray.push(parsedObject.blocks[0]);
        fs.writeFileSync(destFile, JSON.stringify(this.parsedArray));
      });
    });
  }

  parser(name, cb) {
    dss.parser(name, ( i, line, block ) => cb(i, line, block));
  }
}

module.exports = Doki;
