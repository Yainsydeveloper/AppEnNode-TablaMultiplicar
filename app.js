// exportar hoja multiplicar
const colors= require("colors");
const {crearArchivo}= require("./04-helpers/multiplicar");
const argv= require("./configuracion/yargs");


console.clear();

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo=> console.log(`${nombreArchivo} creada`.green))
.catch(err => console.log(err));
