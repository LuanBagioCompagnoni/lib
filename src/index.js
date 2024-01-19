import fs from 'fs';
import chalk from 'chalk';

function treatsError(error){
    if(error.code === 'ENOENT'){
        console.log(chalk.red(error.code, 'Invalid directory!'))
        return;
    }
    else{
        throw new Error(chalk.red(error.code, 'Error: '))
    }
}

async function getArchive(directory){
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(directory, encoding);
        const result = getAddress(text);
        return result.length !== 0 ? result : 'Lenth = 0';
    }catch(errror){
        treatsError(error);
    }
}

function getAddress(archiveText){
    try {
        const testRegexName = /\[([^[\]]*?)\]\(([^[\]]*?)\)/gm;
        const capts = [...archiveText.matchAll(testRegexName)];
        const results = capts.map(capt => ({[capt[1]]: capt[2]}));
        return results;
    } catch (error) {
        throw error;
    }
}

function testAddresses(adresses){

}

export { getArchive, treatsError };