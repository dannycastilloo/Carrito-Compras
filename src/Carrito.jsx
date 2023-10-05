import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ComprasScreen } from "./pages/ComprasScreen"
import { CarritoScreen } from "./pages/CarritoScreen"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const Carrito = () => {
    return (
        <>
            <ProductosProvider>
                <CarritoProvider>
                    <Navbar></Navbar>
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<ComprasScreen></ComprasScreen>}></Route>
                            <Route path="/carrito" element={<CarritoScreen></CarritoScreen>}></Route>
                            <Route path="/perfil" element={<CarritoScreen></CarritoScreen>}></Route>
                            <Route path="/login" element={<CarritoScreen></CarritoScreen>}></Route>
                            <Route path="/register" element={<CarritoScreen></CarritoScreen>}></Route>
                            <Route path="/*" element={<Navigate to='/' />}></Route>
                        </Routes>
                    </div>
                </CarritoProvider>
            </ProductosProvider>
        </>
    )
}
