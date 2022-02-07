import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import NavBar from "../NavBar/NavBar"

/*
import Products from "../pages/Products/Products"
import Register from "../pages/Register/Register"
import Lacteos from '../pages/Products/Lacteos';
import Verduras from '../pages/Products/Verduras';*/

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}/>
                <Route path='/shopping' element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router