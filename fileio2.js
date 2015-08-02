var fs = require('fs');
var path = require('path');
var inputDir = process.argv[2];
var inputExt = '.' + process.argv[3];

fs.readdir(inputDir,function (err,dirList) {
    if (err) throw err;
    dirList.forEach(function(fileName){
        if (path.basename(fileName, inputExt) != fileName) {
            console.log(fileName);
        }
    });
});