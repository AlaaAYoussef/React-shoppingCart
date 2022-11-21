import { FETCH_PRODUCTS } from "./actionType";



const fetchProducts = () => {
  return (dispatch) => {
     fetch('/api/products').then((res) =>(res.json())).then(data => {
        dispatch({ type: FETCH_PRODUCTS, payload: data })
      })
  }
};


export default fetchProducts;
