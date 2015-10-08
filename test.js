var Doki = require('./index.js');
var dss  = require('dss');

doki = new Doki('./demo/scss/*.scss');
doki.parser('id', (i, line, block) => line );

doki.parse('./docs/index.json');
