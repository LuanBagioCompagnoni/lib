import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    throw new Error(chalk.red(error.code, 'Invalid directory!'))
}

async function getArchive(directory){
    try{
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(directory, encoding);
        getAddress(text);
    }catch(errror){
        trataErro(error);
    }
}

async function getAddress(archiveText){
    try {
        const testRegexName = /\[[^[\]]*?\]/;
        let match;
        let matches = [];
        let cont = 0;
        console.log(testRegexName.exec(archiveText))/*
        while ((match = testRegexName.exec(archiveText)) !== null) {
            console.log(match)
            // Step 4: Handle groups if needed
            // Step 5: Process the extracted text
            matches.push(match[cont]);
            cont ++;
        }
        console.log(matches);*/
    } catch (error) {
        throw error;
    }
}



// promises - then

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';

//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';

//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro){
//             trataErro(erro)
//         }
//         console.log(chalk.green(texto))
//     })
// }

getArchive('./arquivos/texto.md')

//Pegar nome:
    // \[[^[\]]*?\]

//Pegar link:
    // \([^[\]]*?\)