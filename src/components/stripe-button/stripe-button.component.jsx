import React from 'react'
import StripeCheckout from "react-stripe-checkout"
const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100 ; 
  const publistableKey = "pk_test_GqeDNGLAbXcAnQ8xs8OAzKcW00uS9xIftb"
  const onToken = token => {
    console.log(token);
    alert("Payment success")
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

export default StripeCheckoutButton
