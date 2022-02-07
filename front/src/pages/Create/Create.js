import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Create.css'

const Create = ( { created }) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valida, setValida] = useState("")
    const [age, setAge] = useState(0);

    //const baseURL = 'http://localhost:3100/api'
    const baseURL = 'https://tasks-register.herokuapp.com/api'

    const handleMail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleAge = (e) =>{
        setAge(e.target.value)
    }

    const handleCreate = async () => {
        try{
            if(email !== "" && password !== "" && age !== ""){
                const response = await axios.post(`${baseURL}/user` , {
                    email,
                    password,
                    age
                });
                console.log(response)
                response?.data && created()
                setValida("")
            }else{
                setValida("Alguno de los campos no está completo.")
            }
        }
        catch(error){
            alert(error)
        }
        
    }

    return (
        <div className="square">
            <h2>Creación de Usuarios</h2>
            <input placeholder="...ingrese email" value={email} onChange={handleMail} />
            <input placeholder="...ingrese password" value={password} onChange={handlePassword} />
            <input placeholder="...ingrese edad" value = {age} onChange={handleAge} />
            <button onClick={handleCreate}>Crear</button>
            <span>{valida}</span>
        </div>
    )
}

export default Create
