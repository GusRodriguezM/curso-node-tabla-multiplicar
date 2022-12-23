import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from './config/yargs.js';

console.clear();

const { base, listar, hasta } = argv;

crearArchivo(base, listar, hasta)
    .then( nombreArchivo => console.log(`${nombreArchivo} creado`) )
    .catch( err => console.log(err) );

