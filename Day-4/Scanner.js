import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"please type url",
        name:"enterUrl",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.enterUrl;
    console.log(url);
    //png
    var qrimage =qr.image(url,{type:'png'});
    qrimage.pipe(fs.createWriteStream("url.png"))
    //svg 
    var qrimage1=qr.image(url,{type:'svg'});
    qrimage1.pipe(fs.createWriteStream("url1.svg"))

    fs.writeFile("urltext.txt",url,(err)=>{
        if (err) throw err;
        console.log("successfully written");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });