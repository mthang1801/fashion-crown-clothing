import React from 'react'
import styled , {css} from "styled-components";
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div`
  height : 70px; 
  width : 100% ; 
  margin-bottom : 25px ;  
  padding : 1rem 0;
  position : relative;
}
`

export const HeaderContent = styled.div`
  display : flex ; 
  justify-content: space-between;
  position : relative;   
  align-items: center;
`

export const LogoContainer = styled(Link)`
  .logo-container{     
    width : 70px;      
    margin-left : 2rem;   
  }
`

  export const OptionsContainer = styled.div`
    margin-right : 2rem;
    height : 100%;
    width : 50%; 
    display : flex ; 
    justify-content: flex-end;
    align-items: center;
`

export const OptionLink = styled(Link)`
cursor: pointer;
padding : 1rem ;
text-transform: uppercase;
&:hover{
  text-decoration: underline;
`
