import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCart} from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({cartItems,  history, match, closeCart}) => {   
  const handleGoToCheckout = e => {
    closeCart();
    history.push("/checkout");
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        )) : (
          <span className="empty-item">Your cart is empty</span>
        )
        }
      </div>
      <div className="cart-checkout">
        <CustomButton 
          variant="outlined"
          size="small" 
          disabled={!cartItems.length} 
          onClick={handleGoToCheckout}>
            Go to checkout
        </CustomButton>
      </div>
    </div>
  )
}
const mapStateToProps =createStructuredSelector({
    cartItems : selectCartItems
})
const mapDispatchToProps = dispatch => ({
  closeCart : () => dispatch(toggleCart())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));
