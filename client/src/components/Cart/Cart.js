import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import FormCheckout from "../FormCheckout/FormCheckout";
import Bounce from 'react-reveal/Bounce';
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cartAction";


function Cart(props) {
  const [checkoutForm, setChekoutForm] = useState(false);
  const [value,setvalue]=useState("")
  const submitOrder = (e) => {
    e.preventDefault();
    console.log(value)
  };
    const handleChange =(e)=>{
        setvalue((prevState)=>({...prevState ,[e.target.name]:e.target.value}))
      
    }
   


  const closeForm = () => {
    setChekoutForm(false);
    
  };
 

  return (
    <>
    
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length == 0 ? (
          "Cart is Empty"
        ) : (
          <p>There is {props.cartItems.length} in cart </p>
        )}
      </div>
      <Bounce left cascade>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item">
            <img src={item.imgURL} alt="" />
            <div className="item-desc">
              <p>{item.title}</p>
              <p>{item.qty}</p>
              <p>${item.price}</p>
            </div>
            <button onClick={() => props.removeCart(item)}>Remove</button>
          </div>
          
        ))}
        

        <div className="total">
          <div>
            <span>
              Total Price : $
              {props.cartItems !== 0 &&
                props.cartItems.reduce((acc, p) => {
                  return (acc = acc + p.price);
                }, 0)}
            </span>
          </div>
          <button onClick={() => setChekoutForm(true)}>select products</button>
        </div>
      </div>
      </Bounce>
     
        <FormCheckout 
        checkoutForm={checkoutForm}
        closeForm={closeForm} 
        submitOrder={submitOrder}
        handleChange={handleChange} 
        value={value}/>
      
    </div>
    
    </>
  );
}

export default connect((state)=>{
  return {
    cartItems:state.cart.cartItems
  }

},{removeCart})(Cart)
