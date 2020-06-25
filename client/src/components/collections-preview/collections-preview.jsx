import React from 'react'
import "./collections-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from "react-router-dom";
const CollectionsPreview = ({title, items, history, match}) => { 
  return (
    <div className="collections-preview">
      <h1 className="title"  onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)} style={{cursor:"pointer"}}>{title}</h1>
      <div className="preview">
        {items.filter((item,idx) => idx < 4).map( (item) => ( 
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(CollectionsPreview)
