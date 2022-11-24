import { FETCH_PRODUCTS, FILTERBYORDER, FILTERBYSIZE } from "../actions/actionType"

const productReducer =(state={},action)=>{
    switch (action.type){
        case FETCH_PRODUCTS:
            return {products:action.data,filteredProducts:action.data}
            case FILTERBYSIZE:
                return {
                    ...state,
                    size:action.data.size,
                    filteredProducts:action.data.products
                }
                case FILTERBYORDER:
                    return {
                        ...state,
                        sort:action.data.sort,
                        filteredProducts:action.data.products
                    }
      default:
         return state
    }
}
export default productReducer