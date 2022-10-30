import React from "react";
import "../../css/Cart/Cart.css";
function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">{props.cartItems.length==0?"Cart is Empty":
      <p>There is {props.cartItems.length} in cart </p>}
      </div>
      <div className="cart-items">
        {props.cartItems.map(item=>(
             <div className="cart-item">
             <img src={item.imgURL} alt=""/>
             <div className="item-desc">
                 <p>{item.title}</p>
                 <p>{item.qty}</p>
                 <p>${item.price}</p>
             </div>
             <button onClick={()=>props.removeFromCart(item)}>Remove</button>
         </div>

        ))}
       

      </div>
    </div>
  );
}

export default Cart;
