var wwwGet = require('http');
var inUrl = process.argv[2];
var pageResult = wwwGet.get(inUrl, function(result){
    result.setEncoding('utf-8');
    result
        .on('error', function(e) {
            console.log('Got error: ' + e.message);
        })
        .on('data', function(data){
            console.log(data);
        });    
});
