const fs = require('fs');
const DATA_PATH = "./data/database.json";

const saveData = (data) => {
    return new Promise( (resolve, reject) => {
        fs.writeFile(DATA_PATH, JSON.stringify(data), (err,result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        })
    })
}

const getData = () => {
    return new Promise((resolve, reject) =>{
        fs.readFile(DATA_PATH, 'utf8', (err,result) =>{
            if(err){
                //reject(err);
                reject("Fallo al leer el archivo")
            }
            resolve(JSON.parse(result));
        })
    }) 
}

module.exports = {
    getData,
    saveData
}