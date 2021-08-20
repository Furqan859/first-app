import React from "react"


    const Cart= ({data:{id,name, price, image}}) =>{
    return  (
        <div className="card" id={id} style={{width:"18rem"}}>
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                    src={image}
                    className="img-fluid"
                />
                <a href="#!">
                    <div className="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
                <h5>{price}</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </p>
                <a href="#!" className="btn btn-primary">Button</a>
            </div>
        </div>

    )
}

export default Cart