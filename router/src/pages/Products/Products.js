import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'

const Products = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            history.push('/login')
        }
    }, [])

    const onLogout = () =>{
        localStorage.clear()
        history.push('/login')
    }
    return (
        <div>
            <h1>SOY PRODUCTS!</h1>
            <button>Logout</button>
        </div>
    )
}

export default Products
