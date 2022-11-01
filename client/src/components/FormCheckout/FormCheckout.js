import React, { useState } from "react";
import "../../css/FormCheckout/FormCheckout.css";
import Input from "../../components/Input/Input";
function FormCheckout(props) {
  return (
    <>
      {props.checkoutForm && (
        <div className="checkoutForm">
          <span className="closeIcon" onClick={props.closeForm}>
            &times;
          </span>
          <form onSubmit={props.submitOrder}>
            <Input label="Name" name="name" type="text" handleChange={props.handleChange} />

            <Input
              label="Email"
              type="email"
              name="email"
              handleChange={props.handleChange}
            />

            <div>
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default FormCheckout;
