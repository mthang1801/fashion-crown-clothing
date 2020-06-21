import React from 'react'
import "./checkout.styles.scss";
import {connect} from "react-redux";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
const Checkout = ({cartItems, totalPrice}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Total Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-body">
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
      </div>
      <div className="checkout-footer">
        <span className="total">Total : ${totalPrice}</span>
      </div>
      <div className="text-warning">
        You can use test credit cart : 4242 4242 4242 4242 - expDate : 05/23 - cvc : 999
        <br/>
        Otherwise, you can follow lists of testing cart number <a href="https://stripe.com/docs/testing" target="_blank">here</a>
      </div>
      <StripeCheckoutButton price={totalPrice}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  cartItems : selectCartItems,
  totalPrice : selectCartTotalPrice
})

export default connect(mapStateToProps)(Checkout)
