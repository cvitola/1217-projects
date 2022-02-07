import React from 'react'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import { instance } from '../../axios/axios'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            history.push('/products')
        }
    }, [])

    const history = useHistory();

    const onRegister = () => {
        history.push('/register');
    }

    const onLoginAxios = async () => {
        try{
            const response = await instance.post('/auth/login' ,{
                email, password
            });

            console.log(response);
            if(response.status === 200){
                setError(false);
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                history.push('/products')
            } else {
                setError(true)
            }
        }
        catch(error){
            alert(error)
        }
    }

    const onLogin = async () =>{
        try{
            const response = await fetch('https://back-sandbox.herokuapp.com/api/auth/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {email, password})
            });

            
            if (response.status  === 200){
                setError(false)
                const json = await response.json()
                console.log(json)
                localStorage.setItem('token', json.token)
                history.push('/products')
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

    return (
        <div className="login">
            <h1>SOY LOGIN</h1>
            <form action="">
                <input type="text" placeholder="email..." value={email} onChange = {handleChangeMail}/>
                <input type="password" placeholder="password..." value={password} onChange={handleChangePassword}/>
                {error && <p className="error">Email o contraseñas erroneos</p>}
                <button type="button" onClick={onLoginAxios}>Login</button>
                <small onClick={onRegister}>Registrate!</small>
            </form>
            
        </div>
    )
}

export default Login
