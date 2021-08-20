import React, {useEffect, useReducer} from "react";
import {product} from "../databse";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import CarouselSlides from "./CarouselSlides";
const reducer = (currentState , action)=> {
    switch (action) {
        case "loadproduct":
            return currentState = product

        case "default":
            return currentState
    }
}
const  UseReducer = () =>{
    const[product, dispatch] = useReducer(reducer, [])
   useEffect(()=>{
  dispatch("loadproduct")

    },[])

    return(
        <div>
            <Header/>
            <CarouselSlides/>

            <div className="container-fluid">
                <h1 className="display-4">Store-</h1>
                <div className="row">
                    {product.map(mobile=>(<Card data={mobile} />))}

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default UseReducer;