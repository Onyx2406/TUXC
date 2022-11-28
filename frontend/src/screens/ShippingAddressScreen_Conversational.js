import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps_conversational from '../components/CheckoutSteps_conversational';
import { BrowserRouter, Link, Route } from 'react-router-dom';




export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push('/placeorder');
  };
  return (
    <div>
      <CheckoutSteps_conversational step1 step2 ></CheckoutSteps_conversational>
      {/* <div>
          <h1>Shipping Address</h1>
          </div> */}
        {/* <Link to="/shippingconversational"><button >
            Proceed with Conversational Method
      </button></Link> */}
      
     
      <form className="form" onSubmit={submitHandler}>
      <div>
      <h1>Chatbot Form Filling</h1>
    </div>
      <iframe
      allow="microphone;"
    width="600"
    height="400"
    src="https://console.dialogflow.com/api-client/demo/embedded/962f27f9-6797-4aa3-aa9c-53fa188dd92c">
    </iframe>
      </form>
    
    </div>
  );
}