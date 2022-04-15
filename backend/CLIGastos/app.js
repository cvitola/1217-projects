const spends = require('./spends');

/*
    En este desafío vamos a crear una aplicación CLI para guardar nuestros gastos en un archivo JSON.
    Gasto tendrá fecha - tipo - importe
    
    => Guardar Gasto node app.js addSpend 02/03/2022 Gas 900
    => Mostrar Gasto node app.js viewSpend Gas
    => Modificar Gasto node app.js editSpend Gas
    => Eliminar Gasto node app.js deleteSpend Gas
    => Listar Gastos y su Total node app.js sumSpend
*/



const run = async () => {
    const args = process.argv.slice(2);
    switch (args[0]) {
        case 'addSpend':
            await spends.addSpend(args[1],args[2], args[3]);
            break;
        case 'viewSpend':
            await spends.viewSpend(args[1]);
            break;
        case 'editSpend':
            await spends.editSpend(args[1], args[2]);
            break;
        case 'deleteSpend':
            await spends.deleteSpend(args[1]);
            break;
        case 'sumSpend':
            await spends.sumSpend(args[1]);
            break;
        default:
            console.log("Comando no encontrado");
            break;
    }
}

run();

