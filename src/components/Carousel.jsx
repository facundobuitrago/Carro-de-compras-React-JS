const Carousel = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="/images/slide1.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="/images/slide2.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="/images/slide3.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel;