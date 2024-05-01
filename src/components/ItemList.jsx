
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            {items.map(e => (
                <Item key={e.id} item={e} />
            ))}
        </>
    )
}

export default ItemList;