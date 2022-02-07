import React from 'react'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            history.push('/products')
        }
    }, [])

    const history = useHistory();

    const onRegister = async () =>{
        try{
            const response = await fetch('https://back-sandbox.herokuapp.com/api/auth/register',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( { 
                    email,
                    password,
                    name,
                    lastName,
                    age,
                    img: ''
                })

            });

            
            if (response.status  === 200){
                setError(false)
                const json = await response.json()
                console.log(json)
                alert("OK!")
                history.push('/login')
            }else{
                setError(true)
            }

        }
        catch(error){
            alert(error)
        }

    }

    const handleChangeMail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEdad = (e) => {
        setAge(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }


    return (
        <div className="login">
            <h1>Registrate</h1>
            <form action="">
                <input type="text" placeholder="Nombre..." value={name} onChange={handleChangeName}/>
                <input type="text" placeholder="Apellido..." value={lastName} onChange={handleChangeLastName}/>
                <input type="age" placeholder="Edad..." value={age} onChange={handleChangeEdad}/>
                <input type="text" placeholder="email..." value={email} onChange = {handleChangeMail}/>
                <input type="password" placeholder="password..." value={password} onChange={handleChangePassword}/>
                {//<input type="text" placeholder="Imagen..." value={password} onChange={handleChangeImagen}/>
                }
                {error && <p className="error">Revisa los campos</p>}
                <button type="button" onClick={onRegister}>Enviar</button>

            </form>
            
        </div>
    )
}

export default Register
