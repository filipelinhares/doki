'use strict';

const fs = require('fs');
const dss = require('dss');
const glob = require('glob');

class Doki {
  constructor(files) {
    this.files = files;
    this.parsedArray = [];
  }

  out(options) {
    let files;
    options = options || {};

    if (Array.isArray(this.files)) {
      files = this.files;
    } else {
      files = glob.sync(this.files);
    }

    // Check if has any file
    if (files.length === 0) {
      console.error(`Has no file in ${this.files}!`);
      process.exit();
    }

    files.forEach((file) => {
      let fileContent = fs.readFileSync(file);
      dss.parse(fileContent, options, (parsedObject) => {
        this.parsedArray.push(parsedObject.blocks[0]);
      });
    });

    return this.parsedArray;
  }

  parser(name, cb) {
    dss.parser(name, (i, line, block) => cb(i, line, block));
  }
}

module.exports = Doki;
