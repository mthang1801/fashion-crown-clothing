import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import axios from "axios";
import {clearCartItems} from "../../redux/cart/cart.actions"
import {connect} from "react-redux"
const StripeCheckoutButton = ({price, clearCartItems}) => {
  const priceForStripe = price * 100 ; 
  const publistableKey = "pk_test_GqeDNGLAbXcAnQ8xs8OAzKcW00uS9xIftb"
  const onToken = token => {   
    axios({
      method : "post",
      url : "payment",
      data : {
        token, 
        amount : priceForStripe,        
      }
    })
    .then(res => {
      alert("Payment success");
      clearCartItems();
    })
    .catch(error => {
      console.log(error);
    })
    
  }
  return (
    <StripeCheckout 
      label="Pay now"
      name ="CRWN Cloting LTD"    
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publistableKey}
    />
  )
}

export default connect(null,{clearCartItems})(StripeCheckoutButton)
