import img1 from '../assets/carousel/Carousel_image_1.png';
import img2 from '../assets/carousel/Carousel_image_2.png';
import img3 from '../assets/carousel/Carousel_image_3.png';
import "./css/carousel.css"

function Carousel() {
    return (
        <>
            <div id="propertyCarousel" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#propertyCarousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="overlay"></div>
                        <img src={img1} className="d-block w-100 carousel-img" alt="Property 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="hero-header">Find Your Dream Home</h1>
                            {/* <p className="hero-description">Reach thousands of buyers quickly with our verified platform</p> */}
                            <p className="hero-description">Browse thousands of listings with intractive maps and 360 virtual tours</p>
                            <button className="btn btn-hero">List Now</button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="overlay"></div>
                        <img src={img2} className="d-block w-100 carousel-img" alt="Property 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="hero-header">List Your Property Today</h1>
                            <p className="hero-description">Reach thousands of buyers quickly with our verified platform</p>
                            <button className="btn btn-hero">Explore Now</button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="overlay"></div>
                        <img src={img3} className="d-block w-100 carousel-img" alt="Property 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="hero-header">Meet Verified Sellers and Agents</h1>
                            <p className="hero-description"></p>
                            <button className="btn btn-hero">Start Investing</button>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel;