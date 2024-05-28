import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [visible, setVisible] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const db = getFirestore();
            const docRef = doc(db, "productos", id);
            const snapShot = await getDoc(docRef);
            if (snapShot.exists()) {
                setItem({ id: snapShot.id, ...snapShot.data() });
                setVisible(false);
            }
        };
        fetchItem();
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : (item && <ItemDetail item={item} />)}
            </div>
        </div>
    );
};

export default ItemDetailContainer;
