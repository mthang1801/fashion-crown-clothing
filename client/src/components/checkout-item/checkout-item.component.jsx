import React from 'react'
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {clearItemFromCart, increaseQuantityItem, decreaseQuantityItem} from "../../redux/cart/cart.actions"
const ChekoutItem = ({cartItem, clearItemFromCart, increaseQuantityItem, decreaseQuantityItem}) => {
  console.log("rendering");
  const { id, imageUrl, name, price, quantity} = cartItem;
 
  return (
    <div className="checkout-item">
      <div className="item-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="decrease" onClick={() => quantity > 1 ? decreaseQuantityItem(id) : 1}>&#10092;</span>
        { quantity }
        <span className="increase" onClick={() => increaseQuantityItem(id)}>&#10093;</span>
      </span>
      <span className="price">${price}</span>
      <span className="totalprice">${quantity * price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(id)}>&#10008;</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItemFromCart : id => dispatch(clearItemFromCart(id)),
  increaseQuantityItem : id => dispatch(increaseQuantityItem(id)),
  decreaseQuantityItem : id => dispatch(decreaseQuantityItem(id))
})

export default connect(null, mapDispatchToProps)(ChekoutItem)
