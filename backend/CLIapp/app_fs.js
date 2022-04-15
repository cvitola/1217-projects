const fs = require("fs");

//de forma Sincronica
/*const content= fs.readFileSync('./data/archivito.txt', 'UTF-8'); //lee archivo entero
const newFile = fs.writeFileSync('./data/nuevitoArchuivito.txt', content); //crea archivo y pone 
fs.appendFileSync('data/nuevitoArchuivito.txt', "te agrego otra linea porque puedooo"); //agrega al final del archivo mas datos contiguos

console.log(content);*/


//De forma Asincronica. PRoblema: ANADICION DE VARIOS Y NO ES LEGIBLE
/*
const contentAsync = fs.readFile('./data/archivito.txt', 'utf8', (err,result) =>{
    //que hago al terminar de leer
    if(err){
        console.log(err)
        return ;
    }
    
    fs.writeFile('./data/newFile.txt', result, (err, result) => {
        if(err){
            console.log(err);
            return ;
        }

        fs.appendFile('./data/newFile.txt', "fin del archivo", (err,result) =>{
            if(err){
                console.log(err)
                return ;
            }
            console.log("Termino la ejecucion")
        })
        
    });
});

console.log("Mandé a hacer las tasks")
*/
//con promesas forma final NO jkajaj. PROBLEMA: NO SAFO DE AÑADIR 

const getData = (path) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(path, 'utf8', (err,result) =>{
            if(err){
                //reject(err);
                reject("Fallo al leer el archivo")
            }
            resolve(result);
        })
    }) 
}

const saveData = (path, info) => {
    return new Promise( (resolve, reject) => {
        fs.writeFile(path, info, (err,result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        })
    })
}
/*
const dataPromise = getData('./data/archivito.txt');
//dataPromise tiene 3 estados then[espero q se resuelva y muestro resultado ok] catch[espero q se resuelva y muestro el error] finally[ejecuta siempre no lo necesitamos por ahora]
dataPromise.then((data)=>{
    console.log("En el Then")
    console.log(data)
}).catch((err) => {
    console.log("en el catch")
    console.log(err)
})
console.log("Hola estoy al final")
//el problema es que si necesito hacer otra cosa, por ejemplo escribir en otro archivo tengo q volver a anadir dentro del THEN :....
*/

//async await me ahorro los 3 estados de la promises.
const run = async () =>{
    console.log("Voy a obtener datos del file");
    try{
        const data = await getData('./data/archivito.txt');
        console.log(data);
        await saveData('./data/otroFile.txt', "soy otro file distinto");
    }
    catch(err){
        console.log(err);
    }

}

run();
/*
con objetos y JSON
metodos JSON.stringify(obj) --> transforma a texto un objetos
        JSON.parse al reves ...
*/
    