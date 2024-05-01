import { Link } from "react-router-dom";
import bannerRopa from "../assets/images/banner-ropa.webp";
import bannerMate from "../assets/images/banner-mate.webp";
import bannerCafe from "../assets/images/banner-cafe.webp";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerRopa})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginRight:20}}>
                    <Link to={"/category/ropa"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Ropa</span>
                    </Link>
                </div>
                
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerMate})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320}}>
                    <Link to={"/category/mate"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Mate</span>
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${bannerCafe})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:320, marginLeft:20}}>
                    <Link to={"/category/cafeyte"} className="text-decoration-none">
                        <span className="bg-black text-white text-uppercase px-3 py-2">Café y Té</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;