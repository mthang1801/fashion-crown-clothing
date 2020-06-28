import styled from "styled-components";

export const CollectionPreviewContainer = styled.div` 
  display : flex ; 
  flex-direction: column;  
  margin-bottom : 2rem;
`

export const CollectionTitle = styled.h1`
  margin : 1rem auto;
  font-size : 2.25em;
  color : black;
  font-weight: bold;
  &:hover{
    color : grey;
  }
`

export const CollectionPreviewItems = styled.div`
  display : flex ;          
  justify-content: space-between;     
  @media screen and (max-width : 800px){
    display : grid ; 
    grid-template-columns : 1fr 1fr ;
    grid-gap : 1rem;
  }
`