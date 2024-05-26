import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(produ => (
                <Item key={produ.id} item={produ} />
            ))}
        </>
    )
}

export default ItemList;