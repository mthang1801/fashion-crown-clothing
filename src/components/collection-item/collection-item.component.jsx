import React from 'react'
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {connect}  from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";
const CollectionItem = ({item, addItemToCart}) => {
  
  const { name, imageUrl, price} = item;
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
        <div></div>
      </div>
      <div className="collection-footer">
        <div className="collection-footer__name">{name}</div>
        <div className="collection-footer__price">${price}</div>
      </div>
      <div className="custom-button">
        <CustomButton variant="contained" color="white" onClick={() => addItemToCart(item)}>Add To cart</CustomButton>
      </div>     
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart : item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)
