//exportar yargs
const colors= require("colors");
const argv = require('yargs')
.option('b', {
    alias: 'base'.yellow,
   demandOption: true,
   // default: '/etc/passwd',
   describe: 'Es la base de la tabla de multiplicar'.red,
    type: 'number'
})
.check((argv, options) => {
    
    if (isNaN(argv.b)) {
      throw new Error("La base tiene que ser un numero")
    } else {
      return true // tell Yargs that the arguments passed the check
    } 
  })
.option('l', {
    alias: 'listar'.yellow,
    demandOption: true,
    default: false,
    describe: 'Muestra la tabla en consola'.red,
    type: 'boolean'
})
.option('h', {
  alias: 'hasta'.yellow,
  //demandOption: true,
  default: 10,
  describe: 'Muestra hasta donde se requiere multiplicar ejemplo 5x(h) '.red,
  type: 'number'
})

.argv;

module.exports= argv;