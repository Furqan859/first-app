
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

        <button onClick={() => dispatch("increment")}>incremnt</button>
        <button onClick={() => dispatch("decrement")}>decrement</button>
        <button onClick={() => dispatch("reset")}>reset</button>

    </div>)
}
export default UseReducer;
