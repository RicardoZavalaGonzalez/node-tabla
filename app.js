const { tablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

// Argumentos de la consola, version manual 
/* const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('='); */

/* // Argumentos de la consola por yargs
console.log(argv); */

tablaMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
