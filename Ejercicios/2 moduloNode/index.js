// usar el metodo writeFile para escribir un archivo
//fs.writeFile(fILE, data[, options], callback)
const fs = require('fs');
/*fs.writeFile("archivo.txt", "texto-contenido del archiv", (err)=>{
    if(err)throw err;
    console.log("El archivo se ha creado");
});*/

//modifica el texto de archivo.txt
//escribe aqui abajo el metodo corresponcidente para leer el archivo.txt y obtener el texto nuevo
fs.readFile("archivo.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});