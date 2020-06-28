import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Open Sans Condensed";
    padding : 0 20px;
    @media screen and (max-width:800px){
      padding : 0 10px;
    }
  }
  
  .container{
    width : 90%; 
    padding : 20px 0;
    margin : 0 auto ;
  }

  a{
    color : rgba(0,0,0,.9);
    text-decoration: none;
  }

  a:hover{
    color : black;
  }

`;
