import { getArchive, treatsError } from "./index.js";
import { validateHttp } from "./httpValidation.js";
import fs from 'fs';
import chalk from "chalk";

const path = process.argv;

async function printLine(validate, result, archiveName = ""){
    if(validate){
        result = await validateHttp(result);
        console.log(chalk.yellow(`Validated list of links: `), chalk.bgGreen(`${archiveName}`), result)
    }else{
        console.log(chalk.yellow(`List of links: `), chalk.bgGreen(`${archiveName}`), result)   
    }
}

async function textProcess(args){
    try {
        const path = args[2];
        const validate = args[3] === '--validate';
        let adresses = [];
        if(fs.lstatSync(path).isFile()){
            adresses = await getArchive(path)
            printLine(validate, adresses)
        }else if(fs.lstatSync(path).isDirectory()){
            const archives = await fs.promises.readdir(path);
            archives.forEach(async (archiveName) => {
                adresses = await getArchive(`${path}/${archiveName}`)
                await printLine(validate, adresses, archiveName)
            })
        }           
    } catch (error) {
        treatsError(error)
    }
    
}

textProcess(path)