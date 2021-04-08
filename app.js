
const { createTable } = require('./js/index');
const argv  = require('./js/settings/yargs');


const base = argv.b;
const numero = argv.n;
const boolean = argv.l;


createTable(base, numero, boolean)
    .then(nombre => console.log(nombre, 'creado'))
    .catch(err => console.log(err));
