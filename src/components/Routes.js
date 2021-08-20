import React from "react"
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Cart from "./Cart";
import UseReducer from "./UseReducer";
import Login from "./Login";
import Contact from "./Contact"
const Routes = () => {
    return (
        <Router>

            <Route  exact  path="/" component={UseReducer}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact   path="/login" component={Login}/>
            <Route exact path="/contact" component={Contact}/>
        </Router>
    )
}

export default Routes
