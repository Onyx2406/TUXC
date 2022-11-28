import React from 'react';

export default function CheckoutSteps_conversational(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sign-In</div>
      <div className={props.step2 ? 'active' : ''}>Products Selected</div>
      <div className={props.step3 ? 'active' : ''}>Place Order</div>
      {/* <div className={props.step4 ? 'active' : ''}>Place Order</div> */}
    </div>
  );
}