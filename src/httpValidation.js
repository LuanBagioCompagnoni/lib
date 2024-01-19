import chalk from "chalk";

function extractAdress(adresses){
    return adresses.map((objetcAdress) => Object.values(objetcAdress).join())
}

async function statusCheck(urls){
    const statusArray = await Promise.all(
        urls.map(async (url) => {
            try{
                const response = await fetch(url);
                return response.status;
            }catch(erro){
                return treatsError(erro);
            }
        })
    )
    return statusArray;
     
}

function treatsError(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'url not found'
    }else{
        return 'an error occurred'
    }
}

async function validateHttp(address){
    const urls = extractAdress(address);
    const status = await statusCheck(urls);
    return address.map((object, index) => ({
        ...object, 
        status: status[index]
    }));
}

export { validateHttp };