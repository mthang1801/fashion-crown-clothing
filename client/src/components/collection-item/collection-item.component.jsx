import React from 'react'
import {CollectionFooterContainer, CollectionItemContainer, AddButton, BackgroundImage, NameContainer, PriceContainer, CustomButtonContainer} from "./collection-item.styles"
import CustomButton from "../custom-button/custom-button.component";
import {connect}  from "react-redux";
import {addItemToCart} from "../../redux/cart/cart.actions";
import { BackgroundImageConainer } from '../menu-item/menu-item.styles';
const CollectionItem = ({item, addItemToCart}) => {
  
  const { name, imageUrl, price} = item;
  return (
    <CollectionItemContainer >
      <BackgroundImage imageUrl={imageUrl}>
      
      </BackgroundImage>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>     
      <CustomButtonContainer> 
        <CustomButton variant="contained" color="white" onClick={() => addItemToCart(item)}>Add To cart</CustomButton> 
      </CustomButtonContainer>
        
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart : item => dispatch(addItemToCart(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem)
