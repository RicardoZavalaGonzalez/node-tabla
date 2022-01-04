const argv = require('yargs')
    // configuracion de los parametros de la consola
    .options({
        // tipo numero y requerido
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        // valor por defecto
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola',
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Limite de la multiplicación'
        }
    }).check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número';
        }
        return true;
    })
    .argv;

module.exports = argv