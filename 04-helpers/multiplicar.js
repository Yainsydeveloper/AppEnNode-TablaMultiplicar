const fs= require("fs");
const colors= require("colors");

const crearArchivo= async(base=5,l,h=10)=>{
    try {      
      let salida="";
      let consola="";

      for (let i = 1; i <= h; i++) {        
          salida+=`${base} x ${i} = ${base*i}\n`;
          consola+= `${base} ${`x`.green}${i} ${`=`.green} ${base*i}\n`;
      }
      if(l===true){
        console.log("========================".green);
        console.log(`    Tabla del: ${base}  `);
        console.log("========================".green);
  
        console.log(consola);
        console.log("Se imprimio la lista en consola".blue);
      }else{
        console.log("No se imprimio la lista en consola".yellow);
      }
      
      fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
      return(`Tabla del:${base}`);
      
    } catch (err) {
      
      throw(err.red);      
    }
 
   
    



   
}
/* SE REALIZO CON PROMESAS PERO NO SE MANEJO BIEN EL ERROR
const crearArchivo= (base=5)=>{

  return new Promise((resolve,reject)=>{
    console.log("========================");
    console.log(`    Tabla del: ${base}  `);
    console.log("========================");

    let salida="";
    for (let i = 1; i <= 10; i++) {        
        salida+=`${base} x ${i} = ${base*i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`tabla-${base}`,salida);
    resolve(`La tabla ha sido Creada`);
    



 
 //ESTE ES OTRO METODO DE GENERAR UN ARCHIVO
 //fs.writeFile("tabla-del-5",salida, (err)=>{
 //  if(err) throw err;
 // 
 //  console.log(`La tabla ha sido Creada`);
 //})



});
   
}*/

module.exports= {
    //Puede ser funcion:crearArchivo o mas simple
    crearArchivo
}
