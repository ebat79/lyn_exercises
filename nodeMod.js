module.exports = function(inputDir, inputExt, callback) {
    var fs = require('fs');
    var path = require('path');
    fs.readdir(inputDir,function (err,dirList) {
        if (err) return callback(err);
        var expData = new Array;
        dirList.forEach(function(fileName){
            if (path.extname(fileName) === '.' + inputExt) {
                expData.push(fileName);
            }
        });
        callback(null, expData);
    });    
}
