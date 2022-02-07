import axios from "axios";
import { useEffect, useState } from "react"
import './Users.css'

const Users = ( { onGet } ) => {

    //const baseURL = 'http://localhost:3100/api'
    const baseURL = 'https://tasks-register.herokuapp.com/api'
    const [users, setUsers] = useState([])
    
    const onGetusers = async () => {
        const response = await axios.get(`${baseURL}/user`)
        setUsers(response?.data?.users);
    }

    useEffect( () => {
        onGetusers();
    }, [onGet])


    const handleDelete = async (id) =>{
        try{
            const response = await axios.delete(`${baseURL}/user/${id}`)
            if(response.status === 200){
                alert("eliminado");
                setUsers([]);
                onGetusers();
            }

        }
        catch(error){
            alert(error)
        }
    }

    return (
        <div className="users-square">
            {//<button onClick={onGetusers}>Recuperar</button>
            }
            <h2>Lista de usuarios</h2>
            <div className="card">
                {
                    users?.map( u=> <div className="item">
                        <p>{u?.email}</p>
                        <p>{u?.age}</p>
                        <p>{u?.password}</p>
                        
                        <button onClick={() => handleDelete(u._id)}>Eliminar</button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Users
