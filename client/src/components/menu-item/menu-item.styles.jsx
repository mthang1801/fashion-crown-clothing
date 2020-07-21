import styled from "styled-components";

export const MenuItemContainer = styled.div`
  min-width : 30%;
  height :  ${({size}) => size ? "380px" : "240px"};
  flex : 1 1 auto;
  display : flex ; 
  align-items: center; 
  justify-content: center;
  border : 1px solid  black;
  margin : 0 7.5px 15px;
  overflow: hidden;
  &:hover{
    cursor: pointer;
    & .background-image{
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.37,.02,.44,.95);
    }
    & .content{
      opacity: .9;
    }
  }
  &.large {
    height : 350px;
  }
  &:first-child{
    margin-right : 7.5px ; 
  }
  &:last-child{
    margin-left : 7.5px;
  }
  @media screen and (max-width:800px){
    height : 200px;
  }
`

export const BackgroundImageConainer = styled.div`
  width :100%;
  height : 100%;
  background-position: center;
  background-size: cover;    
`

export const MenuContent = styled.div`
  height : 90px ;
  padding : 0 25px ; 
  display : flex ; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border : 1px solid black;
  background-color: white;
  opacity: .7;
  position : absolute;
`

export const MenuTitle = styled.h1`
  font-weight : bold; 
  margin-bottom : 6px ; 
  font-size : 22px ; 
  color  :#4a4a4a;
  text-transform: uppercase;
`

export const MenuSubtitle = styled.div`
  font-weight: lighter;
  font-size : 16px;
`