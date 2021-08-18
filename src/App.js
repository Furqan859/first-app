import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import {useEffect, useState} from "react";
import {mobile,laptop,handfree ,phonecase} from "./databse";
import UseReducer from "./components/UseReducer";

const App = () => {
  const[mobiles, setMobiles] = useState([]);
  const[laptops, setLaptops] = useState([]);
  const [handfrees, setHandfrees] = useState([]);
  const[phonecases,setPhonecase] = useState([]);
  useEffect(()=>{
  setMobiles(mobile);
  setLaptops(laptop);
  setHandfrees(handfree);
  setPhonecase(phonecase)},[]

)

  return <UseReducer/>
  // ( <div >
  //   <Header/>
  //   <div className="container-fluid">
  //     <h1 className="display-4">Mobile</h1>
  //     <div className="row">
  //   {mobile.map(mobile=>(<Card data={mobile}/>))}
  //
  //     </div>
  //   </div>
  //
  //   <div className="container-fluid">
  //     <h1 className="display-4">Laptop</h1>
  //     <div className="row">
  //       {laptop.map(laptop=>(<Card data={laptop}/>))}
  //
  //     </div>
  //   </div>
  //
  //   <div className="container-fluid">
  //     <h1 className="display-4">Handfree</h1>
  //     <div className="row">
  //       {handfree.map(handfree =>(<Card data={handfree}/>))}
  //
  //     </div>
  //   </div>
  //
  //   <div className="container-fluid">
  //     <h1 className="display-4">Phone Case</h1>
  //     <div className="row">
  //       {phonecase.map(phonecase=>(<Card data={phonecase}/>))}
  //
  //     </div>
  //   </div>
  // <Footer/>
  // </div>)
}
export default App;






// import React, {useState, useEffect} from "react";
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Footer from "./components/Footer";
// import {handfree, laptop, mobile, phonecase} from "./databse";
//
//
// const App = () => {
//     //Test```````````````````````````````````````````````
//     const [mobiles, setMobiles] = useState([]);
//     const [laptops, setLaptops] = useState([]);
//     const [handfrees, setHandfrees] = useState([]);
//     const [acessories, setAcessories] = useState([]);
//
//
//     useEffect(() => {
//         setMobiles(mobile);
//         setLaptops(laptop);
//         setHandfrees(handfree);
//         setAcessories(phonecase)
//     }, [])
//
//
//
//     return (
//         <div>
//
//             <Header/>
//             <div className="container-fluid">
//                 <h1 className="display-4">Mobiles</h1>
//                 <div className="row">
//                     {mobiles.map(mobile => (
//                         <Card data={mobile}/>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="container-fluid">
//                 <h1 className="display-4">Laptop</h1>
//                 <div className="row">
//                     {laptops.map(laptop => (
//                         <Card data={laptop}/>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="container-fluid">
//                 <h1 className="display-4">handfrees</h1>
//                 <div className="row">
//                     {handfrees.map(handfree => (
//                         <Card data={handfree}/>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="container-fluid">
//                 <h1 className="display-4">Phone Case</h1>
//                 <div className="row">
//                     {acessories.map(phonecase => (
//                         <Card data={phonecase}/>
//                     ))}
//                 </div>
//             </div>
//             <Footer/>
//         </div>
//     )
// }

// export default App;