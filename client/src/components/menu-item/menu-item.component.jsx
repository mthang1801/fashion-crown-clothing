import React from 'react'
import {MenuContent, MenuItemContainer, MenuSubtitle, MenuTitle, BackgroundImageConainer} from "./menu-item.styles";
import {withRouter} from "react-router-dom";
 const MenuItem = ({title,imageUrl,size, linkUrl, history, match}) => {      
  return (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageConainer style={{backgroundImage: `url(${imageUrl})`}} className="background-image"></BackgroundImageConainer>
      <MenuContent className="content">
        <MenuTitle className="title">{title}</MenuTitle>
        <MenuSubtitle className="subtitle">SHOP NOW</MenuSubtitle>
      </MenuContent>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);