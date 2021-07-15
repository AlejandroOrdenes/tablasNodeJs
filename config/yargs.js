const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    default: 5,
                    demandOption: true,
                    describe: 'Multiplication Table Base'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Show multiplication table in console'
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