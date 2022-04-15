const fsmethods = require("./fsmethods");

const addSpend = async(date,type,amount) => {
    if(date && type && amount){
       const newSpend = {
           date:date,
           type:type,
           amount: amount
       } 

       try{
           const spends = await fsmethods.getData();
           spends.push(newSpend);
           await fsmethods.saveData(spends);
           console.log("Gasto agregado");
        
       }
       catch(err){
           throw err;
       }
    }else{
        console.log("Error - Datos insuficientes");
    }
    
}

//recupero todos los gastos y filtro el que quiero.
const viewSpend = async(type) => {
    try{
        const spends = await fsmethods.getData();
        const spend = spends.filter ( s => s.type === type);
        console.log(spend.length > 0 ? spend[0] : "Ese gasto no fue encontrado...");
    }
    catch(err){
        throw err;
    }
}
//recuepro todos los gastos, 
const editSpend = async(type, amount) => {
    let flag = false;
    try{
        const spends = await fsmethods.getData();
        spends.forEach(s => {
            if(s.type === type){
                s.amount = amount;
                console.log(s)
                flag = true;
            }
        });
        flag ? await fsmethods.saveData(spends) : console.log("Ese gasto no fue encontrado para editar...");
    }
    catch(err){
        throw err;
    }
}
//recupero todos los gatos, y armo una nueva lista con el que no quiero
const deleteSpend = async(type) => {
    try{
        const spends = await fsmethods.getData();
        const newSpends = spends.filter ( s => s.type !== type);
        if(spends.length === newSpends.length){
            console.log("Gasto no encontrado.")
        }else{
            await fsmethods.saveData(newSpends);
            console.log("Gasto Eliminado");
        }
    }
    catch(err){
        throw err;
    }
}
//recupero todos los gastos y sumo la cantidad
const sumSpend = async() => {
    try{
        const spends = await fsmethods.getData();
        console.log(spends)
        const sum = spends.reduce((acum, s) => acum + parseInt(s.amount),0);
        console.log(`Total de gastos: ${sum}`)
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    addSpend,
    viewSpend,
    editSpend,
    deleteSpend,
    sumSpend
}