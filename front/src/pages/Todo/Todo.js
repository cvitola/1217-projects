import './Todo.css';
import { useState , useEffect } from 'react';
import axios from "axios";


const Todo = () => {
    const [title, setTitle] = useState("");
    const [endDate, setEndDate] = useState("");
    const [details, setDetails] = useState("");
    const [valida, setValida] = useState("");
    const [todos, setTodos] = useState([]);

    //const baseURL = 'http://localhost:3100/api';
    const baseURL = 'https://tasks-register.herokuapp.com/api'

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleEndDate = (e) =>{
        setEndDate(e.target.value);
    }
    const handleDetails = (e) =>{
        setDetails(e.target.value);
    }
    const handleDelete = async (id) =>{
        try{
            const response = await axios.delete(`${baseURL}/todo/${id}`)
            if(response.status === 200){
                alert("Eliminado");
                setTodos([]);
                onGetTodos();
            }

        }
        catch(error){
            alert(error)
        }
    }

    const handleSend = async () =>{
        try{
            if(title !== "" && endDate !== "" && details !== ""){
                const response = await axios.post(`${baseURL}/todo` , {
                    title,
                    endDate,
                    details
                });
                setValida("")
            }else{
                setValida("Alguno de los campos no está completo.")
            }
        }
        catch(error){
            alert(error)
        }

    }
    const handleRecuperar = () =>{
        onGetTodos();
    }
    const onGetTodos = async () => {
        const response = await axios.get(`${baseURL}/todo`)
        setTodos(response?.data?.todos);
    }

    useEffect( () => {
        onGetTodos();
    },[title])



    return (
        <div className="todo-container">
            <h2>Cosas para hacer</h2>
            <div className="todo-container-display">
                <input placeholder="...ingrese Titulo" value={title} onChange={handleTitle} />
                <input type="date" value={endDate} onChange={handleEndDate} />
                <textarea placeholder="...ingrese descripcion" rows="5" value = {details} onChange={handleDetails} />
                <button onClick={handleSend}>Enviar</button>
                <span>{valida}</span>
            </div>

            <h2>Cosas recuperadas</h2>
            <div className="card">
               {// <button onClick={handleRecuperar}>Recuperar</button>
               }
                {
                    
                    todos?.map( t=> <div className="item">
                        <p>{t?.title}</p>
                        <p>{
                            t?.endDate.toString().substring(0,10)}</p>
                        <p>{t?.details}</p>
                        <button onClick={() => handleDelete(t._id)}>Eliminar</button>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Todo
