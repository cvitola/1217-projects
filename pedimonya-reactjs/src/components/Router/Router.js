import { Routes, Route } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Main from '../Main/Main'

/*
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import Lacteos from '../pages/Products/Lacteos';
import Verduras from '../pages/Products/Verduras';*/

const Router = () => {
    return (

            <Routes>
                <Route path='/main' element={<Main/>} />
                <Route path='/shopping' element={<ShoppingCart />} />
                <Route path='/' element={<Main />} />
            </Routes>

    )
}

export default Router