//guardar usuarios { name, email, telefono}, buscarlos
const players = require('./players');
const run = async () => {
    const myArgs = { ...process.argv.slice(2)} //argumentos en la linea de comandos node app.js como estas vos
    switch (myArgs[0]) {
        case "addPlayer":
            const newPlayer = await players.addPlayer(myArgs[1], myArgs[2]);
            console.log(newPlayer);
            break;
        case "viewPlayer":
            const player = await players.viewPlayer(myArgs[1]);
            console.log(player);
            break;
    
        default:
            console.log("Linea de comando no encontrada")
            break;
    }

};

run();