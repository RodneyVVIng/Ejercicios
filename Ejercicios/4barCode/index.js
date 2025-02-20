import fs from "fs";
import inquirer from 'inquirer';
import qr from "qr-image";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "escribe la url de tu perfil de github",
        name: "URL",
    },
  ])

  .then((answers) => {
     // Use user feedback for... whatever!!
    const enlace = answers.URL;

    var qr_png = qr.image(enlace,{ type: 'png' });
    qr_png.pipe(fs.createWriteStream("qr-img.png"));
    
    fs.writeFile("enlace.txt", enlace,(err)=>{
        if(err) throw err;
        console.log("El archivo con el enlace ha sido creado correctamente");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });