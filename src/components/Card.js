import React from "react";
import UseReducer from "./UseReducer";
const Card=({data:{name,price,image,id}})=> {
    return (<div className="card" key={id} style={{ width: "18rem"}} >
        <img className="card-img-top" src={image} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <UseReducer/>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-primary btn-sm">Add to Cart</a>
        </div>
    </div>)
}
    export default Card;














// import Reac from "react";
// import PropTypes from 'prop-types';
//
// const Card = ({data: {id, name, price, image}}) => {
//     return ( <div className="col" key={id}>
//         <div className="card" style={{ width: "18rem"}}>
//             <img src={image} className="card-img-top" alt="..."/>
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <p className="lead">{price}</p>
//             </div>
//         </div>
//     </div>)
// }
//
// Card.proptype = {
//     data: PropTypes.object.isRequired
// }
//
// export default Card;