const fsmethods = require("./fsmethods");

const addPlayer = async(name, email) => {
    const newPlayer = {
        name: name,
        email: email,
        score: 0
    };
    try{
        //obtener lista
        const players = await fsmethods.getData();
        console.log(players)
        //agregar
        players.push(newPlayer)
        //guardar
        await fsmethods.saveData(players);
    }
    catch(err){
        throw err;
    }

    return newPlayer;
}

const viewPlayer = async(name) => {

    try{
        const players = await fsmethods.getData();
        const player = players.filter( p => p.name === name);
        return player.length> 0 ? player[0] : "No encontrado";
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    addPlayer,
    viewPlayer,
};