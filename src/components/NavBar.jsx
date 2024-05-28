import { Link, NavLink } from "react-router-dom"; // Importa el componente Link
import logo from "../assets/images/fightClub.png";
import CartWidget from "./CartWidget";


// import search from '../assets/images/search.svg';

function NavBar() {
    return (
        <div>
            <div className="bg-black p-3">
                <div className="col"></div>
                <div className="col-md text-center overflow-x: hidden">
                    <Link to="/">
                        <img src={logo} alt="FIGHT-CLUB" width={320} />
                    </Link>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"
                data-bs-theme="dark"
            >
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center w-100">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-center"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link dropdown-toggle"
                                        to="/catalogo"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Catálogo
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li>
                                        <NavLink className="dropdown-item" to={"/categoria/Remeras"}>Remeras</NavLink>
                                        </li>
                                        <hr className="dropdown-divider" />
                                        <li>
                                            <NavLink className="dropdown-item" to="/categoria/Camperas">
                                                Camperas
                                            </NavLink>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/categoria/Pantalones">
                                                Pantalones
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
