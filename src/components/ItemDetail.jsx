import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount"


const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log("Agregaste: " + quantity + " productos!");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col-md-4">
                    <h1 className="fs-3 text-uppercase fw-semibold">{item.nombre}</h1>
                    <p className="fs-4 fw-bold">${item.precio}</p>
                    <p className="small">{item.descripcion}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;