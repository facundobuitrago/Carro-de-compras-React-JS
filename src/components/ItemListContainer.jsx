import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import Carousel from "./Carousel";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])

    return (
        <>
            {id ? "" : <Carousel />}
            <div className="container">
                <div className="row my-5 display-flex justify-content-center " >
                    <ItemList items={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;