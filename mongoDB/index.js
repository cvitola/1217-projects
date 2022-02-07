const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3100;
const mongoose = require('mongoose');
const { UserModel } = require('./schemas/User');
const { TodoModel } = require('./schemas/Todo');

//const uri = 'mongodb://localhost:27017/test'
const uri =  "mongodb+srv://root:admin@cluster0.eimv6.mongodb.net/myFirstDatabase"

app.use( bodyParser.urlencoded({ extended: false }));
app.use( bodyParser.json() );
app.use( cors() );

//conect BD
const connectDB = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Conectado a DB");
    }
    catch(error){
        console.log(error);
    }
}

connectDB();

//Routes
app.get('/api/hola', (req,res) => {
    res.send('Holis')
})

app.post('/api/user', async (req,res) => {
    try{
        const {email,password,age} = req.body;
        const created = await UserModel({email,password,age}).save();
        res.send(created);
    }
    catch(error){
        res.send("Ocurrio un error")
    }
})

app.get('/api/user', async (req,res) => {
    const users = await UserModel.find();
    res.send({ users });
});

app.delete('/api/user/:id', async (req,res) => {
    const { id } = req.params;
    const deleted = await UserModel.findOneAndDelete({ _id: id});
    res.send( {deleted})
})

app.delete('/api/user/email' , async(req,res) =>{
    const { email } = req.body;
    console.log(req)
    const deleted = await UserModel.findOneAndDelete({ email: email})
    res.send( 'Ha sido eliminado')
})
app.listen(PORT, () => {
    console.log(`Estoy corriendo en el puerto ${PORT}`)
})



//API para TODO

app.post('/api/todo', async (req,res) => {
    try{
        const {endDate, title, details} = req.body;
        const created = await TodoModel({endDate, title, details}).save();
        res.send(created);
    }
    catch(error){
        res.send("Ocurrio un error");
    }
})

app.get('/api/todo', async(req,res) =>{
    try{
        const todos = await TodoModel.find();
        res.send({todos})
    }
    catch(error){
        res.send("Ocurrio un error");
    }
})

app.delete('/api/todo/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const deleted = await TodoModel.findOneAndDelete({ _id: id});
        res.send( {deleted})
    }
    catch(error){
        res.send("Ocurrio un error al borrar")
    }

})