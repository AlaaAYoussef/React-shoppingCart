import { FETCH_PRODUCTS } from "../actions/actionType"

const productReducer =(state={},action)=>{
    switch (action.type){
        case FETCH_PRODUCTS:
            return {products:action.payload}
      default:
         return state
    }
}
export default productReducer