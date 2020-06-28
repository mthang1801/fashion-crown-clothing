import styled from "styled-components"

export const CollectionContainer = styled.div`
  display : flex;
  flex-direction : column;
`
export const CollectionTitle = styled.h1`
  font-size : 2rem;
  font-weight: bold;
  margin : 2rem auto;
`

export const CollectionItems = styled.div`
  display : flex ; 
  width : 100%;
  flex-wrap: wrap;    
  justify-content: space-between;
  @media screen and (max-width: 800px){
    display : grid;
    grid-template-columns : 1fr 1fr ; 
    grid-gap : 1rem;
  }
`