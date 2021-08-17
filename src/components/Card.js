import Reac from "react";
import PropTypes from 'prop-types';

const Card = ({data: {id, name, price, image}}) => {
    return ( <div className="col" key={id}>
        <div className="card" style={{ width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="lead">{price}</p>
            </div>
        </div>
    </div>)
}

Card.proptype = {
    data: PropTypes.object.isRequired
}

export default Card;