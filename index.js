import fs from "fs";
import { writeFile } from 'node:fs';
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
    .prompt([
        {
            message: "Write the URL: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        console.log(answers);
        const url = answers.URL;
        let qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr-image.png"));
        writeFile("url.txt",url,(error)=>{
            if(error){
                console.log(error);
            }
            console.log("File saved.");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

