import {useReducer} from "react";
const initialState =0
const reduce=()=>{

}
const reducer=()=>{
    const[count,dispatch]=useReducer(reduce,initialState)
    return<>
        <button>incriment</button>
        <button>deccriment</button>
        <button>reset</button>
    </>
}