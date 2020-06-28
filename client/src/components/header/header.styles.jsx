import styled  from "styled-components";
import {Link} from "react-router-dom";


export const HeaderContainer = styled.div`
  height : 70px; 
  margin-bottom : 25px ;  
  padding : 1rem 0;
  position : relative;
  @media screen and (max-width:800px){
    height : 60px; 
    padding : 10px ; 
  }
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
    @media screen and (max-width:800px){
      width : 50px;       
    }
  }
`

export const OptionsContainer = styled.div` 
  height : 100%;
  width : 50%; 
  display : flex ; 
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 800px){
    width : 80%;
  }
`

export const OptionLink = styled(Link)`
cursor: pointer;
padding : 1rem ;
text-transform: uppercase;
&:hover{
  text-decoration: underline;
`
