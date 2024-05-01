import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-3 text-center">
            <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card border-0">
                    <img src={item.imagen} className="img-fluid shadow p-4 mb-6 bg-body-tertiary rounded" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text small text-uppercase">{item.nombre}<br /><span className="card-text fs-5"><b>${item.precio}</b></span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item;