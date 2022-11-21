import { FETCH_PRODUCTS } from "./actionType";
import {FILTERBYSIZE , FILTERBYORDER} from './actionType'
const fetchProducts = () => {
  return (dispatch) => {
     fetch('/api/products').then((res) =>(res.json())).then(data => {
        dispatch({ type: FETCH_PRODUCTS, payload: data })
      })
  }
};

export const filteredSize =(products,value)=>{
    return(dispatch)=>{
    let clonedProducts =[...products]
    let newProducts = clonedProducts.filter(p=>p.sizes.index(value)!= -1);
    dispatch({
        type:FILTERBYSIZE,
        data:{
            size:value,
            products:value == "All"? products : newProducts
        }
    })
    }

}
export const filteredOrder =(products,value)=>{
    return(dispatch)=>{
        let clonedProducts = [...products];
        let filteredProducts = clonedProducts.sort(function (a, b) {
          if (value == "Lowest") {
            return a.price - b.price;
          } else if (value == "Highest") {
            return b.price - a.price;
          } else {
            return a.id < b.id ? 1 : -1;
          }
        });
        dispatch({
            type:FILTERBYORDER,
            data:{
                sort:value,
                products:filteredProducts
            }
        })

    }
   

}


export default fetchProducts;
