import { ADD_CART, REMOVE_CART } from "./actionType";

export const addToCart =(product)=>{
    return(dispatch,getState)=>{
        const cartItems= getState().cart.initStateOfCart
        let clonedCartItems = [...cartItems]
        let isProductExist =false
        clonedCartItems.forEach(p=>{
          if(p._id == product._id){
            p.qty++;
            isProductExist=true
          }
        })
        if(!isProductExist){
          clonedCartItems.push({...product,qty:1})
    
        }
        localStorage.setItem('cartItems',JSON.stringify(clonedCartItems))
    
        dispatch({
            type:ADD_CART,
            data:{
                cartItems:clonedCartItems
            }
        })
    }
   
  }
  export const removeCart =(product)=>{
    return(dispatch,getState)=>{
        const cartItems = getState().cart.cartItems
        const clonedCartItems = [...cartItems]
        const updatedCartItems = clonedCartItems.filter(p=> p._id !== product._id)
        dispatch({
            type:REMOVE_CART,
            data:{
                cartItems:updatedCartItems
            }
        })
        localStorage.setItem('cartItems',JSON.stringify(updatedCartItems))

    }

  }
