import { CREATE_ORDER } from "./actionType";
import { CLEAR_CART } from "./actionType";
import { CLEAR_ORDER } from "./actionType";

export const createOrder=(order)=>{
    return(dispatch)=>{
        fetch('/api/orders',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(order)
        }).then(res=>res.json()).then(data=>{
            dispatch({
                type:CREATE_ORDER,
                data:{
                    order:data
                }
            })
        })
        localStorage.clear('cartItems')
        dispatch({type:CLEAR_CART})

    }
}
export const clearOrder=()=>{
    return(dispatch)=>{
        dispatch({
            type:CLEAR_ORDER
        })
    }
}