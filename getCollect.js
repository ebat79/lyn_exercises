var http = require('http');
var bl = require('bl');
http.get(process.argv[2],function(result){
    result.on('error', function(e){
        console.log(e);
    });
    result.on('data', function(data){
        bl.append(data);
    })
    console.log(bl.toString());
});