import "./css/Carousel.css"

function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/2181192/pexels-photo-2181192.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>First slide label</h1>
                            <h5>Some representative placeholder content for the first slide.</h5>
                            <div className="btn-container">
                                <button className='btn-carousel'>
                                    <span className="text">Button 1</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/137032/pexels-photo-137032.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>Second slide label</h1>
                            <h5>Some representative placeholder content for the second slide.</h5>
                            <div className="btn-container">
                                <button className='btn-carousel'>
                                    <span className="text">Button 2</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/1375016/pexels-photo-1375016.jpeg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <h1>Third slide label</h1>
                            <h5>Some representative placeholder content for the third slide.</h5>
                            <div className="btn-container">
                                <button className='btn-carousel'>
                                    <span className="text">Button 3</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;