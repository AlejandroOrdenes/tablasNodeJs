const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    default: 5,
                    demandOption: true,
                    describe: 'Base de la tabla'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Largo de tabla'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true; 
                })
                .argv; 

module.exports = argv;