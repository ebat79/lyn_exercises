var fs = require('fs');
var nl = /\n/;
fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (err) throw err;
    //var nlCount = 0;
    /* var stringArray = data.split(nl);
    for (var i = stringArray.length - 1; i > 0; i--) {
	    nlCount++;
    }; */
    var nlCount = data.split(nl).length - 1;
    console.log(nlCount);
});