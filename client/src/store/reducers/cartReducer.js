import { ADD_CART } from "../actions/actionType";

const addToCart =(state={
    initStateOfCart:JSON.parse(localStorage.getItem('cartItems'))|| []
},action)=>{
    switch (action.type){
        case ADD_CART:
            return {cartItems:action.data.cartItems}
            default:
                return state
    }

}
export default addToCart