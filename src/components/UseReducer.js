
import React,{useReducer} from "react";

const initialState = 0;
const reducer = (currentState , action) =>{
    switch (action){
        case "increment":
            return currentState +1
        case "decrement":
            return currentState -1
        case "reset":
            return initialState
        case "defalt":
            return currentState

    }
}

const UseReducer = () =>{
    const [count ,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
        <div> count - {count}</div>

        <button type="button" className="btn btn-success btn-sm" onClick={() => dispatch("increment")}>Increment</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => dispatch("decrement")}>Decrement</button>
        <button type="button" className="btn btn-dark btn-sm"  onClick={() => dispatch("reset")}>Reset</button>

    </div>)
}
export default UseReducer;
