import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        setContador(prevContador => {
            if (prevContador < itemStock) {
                return prevContador + 1;
            }
            return prevContador;
        });
        console.log("incrementando");
    };

    const decrementar = () => {
        setContador(prevContador => {
            if (prevContador > 1) {
                return prevContador - 1;
            }
            return prevContador;
        });
        console.log("decrementando");
    };

    const addToCart = () => {
        if (contador <= itemStock && typeof onAdd === 'function') {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        } else {
            console.error("onAdd no es una función");
        }
        console.log("agregando al carrito");
    };

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

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
                {visible ? <button type="button" className="btn bg-black text-white text-uppercase rounded-0" onClick={addToCart}>Agregar Al Carrito</button> : <Link to={"/cart"} className="btn bg-black text-white text-uppercase rounded-0">Finalizar Compra</Link>  }
                </div>
            </div>
        </div>
    );
};

export default ItemCount;
