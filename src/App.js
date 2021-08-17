import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import {handfree, laptop, mobile, acessorie} from "./databse";


const App = () => {
    const [mobiles, setMobiles] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [handfrees, setHandfrees] = useState([]);
    const [acessories, setAcessories] = useState([]);

    useEffect(() => {
        setMobiles(mobile);
        setLaptops(laptop);
        setHandfrees(handfree);
        setAcessories(acessorie)
    }, [])


    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <h1 className="display-4">Mobiles</h1>
                <div className="row">
                    {mobiles.map(mobile => (
                        <Card data={mobile}/>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <h1 className="display-4">Laptop</h1>
                <div className="row">
                    {laptops.map(laptop => (
                        <Card data={laptop}/>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <h1 className="display-4">handfrees</h1>
                <div className="row">
                    {handfrees.map(handfree => (
                        <Card data={handfree}/>
                    ))}
                </div>
            </div>

            <div className="container-fluid">
                <h1 className="display-4">acessories</h1>
                <div className="row">
                    {acessories.map(acessorie => (
                        <Card data={acessorie}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;