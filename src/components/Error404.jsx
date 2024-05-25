import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1>- Error -</h1>
                    <h2>404</h2>
                    <p>La página que estás buscando no existe!</p>
                    <p className="my-5"><Link to={"/"} className="btn bg-black text-white">Volver a la Página Principal</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;