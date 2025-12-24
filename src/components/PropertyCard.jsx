import "./css/PropertyCard.css";

const PropertyCard = ({image, price, category, date, district, feature}) => {
    const formatedPrice = new Intl.NumberFormat('en-US',{style: 'currency' ,currency: 'LKR'}).format(price);
    return (
        <>
            {/* <div className="property-grid"> */}
                <div className="property-card">

                    <div className="image-container">
                        <img src={image} alt={category} />
                    </div>

                    <div className="card-content">

                        <div className="price-label">{formatedPrice}</div>
                        <h3  className="property-title">{category} for Sale in {district}</h3>

                        <div className="info-row">
                            <span>{date}</span>
                            <span className="separator">|</span>
                            <span>{district}</span>
                        </div>

                        <div className="detail-row">
                            <span className="category-name">{category}</span>
                            <span className="separator">|</span>
                            <span className="feature-text">{feature}</span>
                        </div>

                    </div>

                </div>
            {/* </div> */}
        </>
    )
}

export default PropertyCard;