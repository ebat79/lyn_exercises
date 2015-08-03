var http = require('http');
var bl = require('bl');
var inUrl = process.argv[2];

http.get(inUrl, function(result) {
    result.pipe(bl(function(err,data) {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));                
});