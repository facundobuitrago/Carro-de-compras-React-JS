import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => { //10
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-dark" onClick={decrementar}> - </button>
                        <button type="button" className="btn btn-dark">{contador}</button>
                        <button type="button" className="btn btn-dark" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {visible ? (
                        <button type="button" className="btn btn-dark btn-block text-uppercase" onClick={addToCart}>
                            Agregar Al Carrito
                        </button>
                    ) : (
                        <Link to="./Cart.jsx" className="btn bg-black text-white text-uppercase rounded-0">
                            Finalizar Compra
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
