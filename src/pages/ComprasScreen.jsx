import { useContext } from "react"
import { Card } from "../components/Card"
import { CarritoContext } from "../context/CarritoContext"
import { ProductosContext } from "../context/ProductosContext"

export const ComprasScreen = () => {

  const { productos } = useContext(ProductosContext)

  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)

  const handleAgregar = (compra) => {
    agregarCompra(compra)
  }

  const handleQuitar = (id) => {
    eliminarCompra(id)
  }

  return (
    <>
      <h1 className="title">Nuestros Productos</h1>
      <hr />
      <div className="container">
        <div className="tarjetas-container">
          {productos.map(producto => (
            <Card key={producto.id}
              imagen={producto.image}
              titulo={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              handleAgregar={() => handleAgregar(producto)}
              handleQuitar={() => handleQuitar(producto.id)}
            ></Card>
          ))}
        </div>
      </div>
    </>
  )
}
