import React from 'react'
import {CollectionPreviewContainer, CollectionTitle, CollectionPreviewItems} from "./collections-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from "react-router-dom";
const CollectionsPreview = ({title, items, history, match}) => { 
  return (
    <CollectionPreviewContainer>
      <CollectionTitle onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)} style={{cursor:"pointer"}}>{title}</CollectionTitle>
      <CollectionPreviewItems >
        {items.filter((item,idx) => idx < 4).map( (item) => ( 
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPreviewItems>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionsPreview)
