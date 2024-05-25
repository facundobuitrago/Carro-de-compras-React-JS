import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}


export default ItemDetailContainer;