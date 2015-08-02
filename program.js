var vettore = process.argv;
var somma = 0;
    for (var i = vettore.length - 1; i >= 2; i--) {
        somma += Number(vettore[i]);
    };
console.log(somma);