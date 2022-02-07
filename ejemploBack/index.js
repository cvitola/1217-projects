const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

//configurar bodyparse y cors
app.use(bodyParse.urlencoded({
    extended: false
}))
app.use( bodyParse.json());
app.use( cors() );


//EndPoints
app.get('/api/test1', (req,res) => {
    const data = [
        {
            id: 1,
            nombre: "Cristian",
            dni: 40652947
        },
        {
            id: 2,
            nombre: "Abel",
            dni: 22502947
        },
        {
            id: 3,
            nombre: "Dario",
            dni: 30402907

        }
    ]
    res.send(data);
})

app.post('/api/test1', (req,res) => {
    //const email = req.body.email;
    //const pass = req.body.pass;
    const {email, pass} = req.body 
    let token = "null"
    if(email === "holi@hotmail.com" && pass ==="pass1234"){
        token = "sd-rfg6854sd654fss65d4fg"
    }
    
    res.send( {token })
})

app.get('/api/otra-cosa' , (req,res) => {
    console.log(req.query); //lo que mandas por params osea en la url
    res.send("Holis")
})

app.delete('/api/users/:id', (req,res) => {
    console.log(req.params)
    const {id} = req.params
    res.send(`Eliminaste el ID: ${id}`)
})
//levantar aplicacion
app.listen(3100, () => {
    console.log("App corriendo en el puerto 3100");
})