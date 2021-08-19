import {useEffect, useReducer} from "react";
import {mobile} from "../databse";
const reducer = (currentState , action)=> {
    switch (action) {
        case "loadmobile":
            return currentState = mobile
        case "default":
            return currentState
    }
}
const  UseReducer = () =>{
    const[mobile, dispatch] = useReducer(reducer, [])
   useEffect(()=>{
  dispatch("loadmobile")
    },[])

    return(
        <div>
            {JSON.stringify(mobile)}
        </div>
    )
}
export default UseReducer;