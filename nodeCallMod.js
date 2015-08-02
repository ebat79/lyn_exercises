var listDirMod = require('./nodeMod.js');
var inputDir = process.argv[2];
var inputExt = process.argv[3];
listDirMod(inputDir, inputExt, function(err,data) {
    if (err) throw err;
    data.forEach(function(filename) {
        console.log(filename);
    });
});