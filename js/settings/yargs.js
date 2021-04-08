

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
    })
    .option('n',{
        alias: 'numero',
        type: 'number',
        default: 10,
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default:false,
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) || isNaN(argv.n) ){
            throw 'b and n must be a numbers';
        }else{
            return true;
        }
    })
    .argv;

    module.exports = argv;