import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CustomButtonContainer = styled.div`
  position : absolute ; 
  bottom : 30%;
  display : none ;
`
CustomButtonContainer.displayname= "CustomButtonContainer";

export const CollectionItemContainer = styled.div`
  width : 23vw ;
  height : 350px ;
  display : flex ; 
  flex-direction: column;
  align-items : center; 
  position: relative;
  &:hover{
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;     
    }
    
  } 
  &:hover ${CustomButtonContainer}{
    display : block;
  }
  @media screen and (max-width: 800px){
    width : 100%;
    height : 250px;
    ${CustomButtonContainer}{
      display : block;
    }
  }
`

export const AddButton = styled(CustomButton)`
  width : 80% ; 
  opacity : 0.7;
  position : absolute;
  top : 255px; 
  display : none ;
  &:hover{
    display: block ;
    opacity : .9; 
    min-width : unset; 
    padding : 0 10px; 
  }
`

AddButton.displayName = "AddButton" ; 

export const BackgroundImage = styled.div`
  width : 100%;
  height :95%;
  background-position: center;
  background-size: cover;  
  margin-bottom : 5px; 
  background-image : ${({imageUrl}) => `url(${imageUrl})`} 
`
BackgroundImage.displayName = "BackgroundImage";

export const CollectionFooterContainer = styled.div`
  display: flex ;
  justify-content: space-between;
  width : 100%;
  height : 5%;
  font-size: 18px;;
  margin : 1rem 0;
`

CollectionFooterContainer.displayName= "CollectionFooterContainer";


export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

NameContainer.displayName = "NameContainer"

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`

PriceContainer.displayName = "PriceContainer"

