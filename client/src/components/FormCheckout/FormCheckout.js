import React, { useState } from "react";
import "../../css/FormCheckout/FormCheckout.css";
import Input from "../../components/Input/Input";
import Zoom from 'react-reveal/Zoom';
function FormCheckout(props) {
  return (
    <>
      {props.checkoutForm && (
        <div className="checkoutForm">
          <span className="closeIcon" onClick={props.closeForm}>
            &times;
          </span>
          <Zoom bottom>
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
          </Zoom>
        </div>
      )}
    </>
  );
}

export default FormCheckout;
