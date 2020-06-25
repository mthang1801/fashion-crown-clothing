import React from 'react'
import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.actions"
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import "./cart-icon.styles.scss"
const CartIcon = ({toggleCart, countItem}) => {
  return (
    <div className="cart-icon" onClick={() => toggleCart()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{countItem}</span>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
    countItem : selectCartItemsCount
})
const mapDispatchToProps = dispatch => {
  
  return {
    toggleCart : () => dispatch(toggleCart())
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
 