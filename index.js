var fs = require('fs');
var dss = require('dss');
var glob = require('glob');

dss.parser( 'custom', function( i, line, block ) {
  return line;
});

var arr = [];
files = glob.sync('*.scss');
files.forEach(function (file) {
  var x = fs.readFileSync(file);
  dss.parse( x, {}, function ( parsedObject ) {
    arr.push(parsedObject.blocks[0]);
    fs.writeFileSync('index.json', JSON.stringify(arr));
  });
});
