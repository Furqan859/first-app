import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Cart from "./Cart";
import UseReducer from "./UseReducer";
import Login from "./Login";
const Routes = () => {
    return (
        <Router>
            <Route exact path="/" component={UseReducer}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/login" components={Login}/>
        </Router>
    )
}

export default Routes
