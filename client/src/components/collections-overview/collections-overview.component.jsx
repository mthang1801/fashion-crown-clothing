import React from 'react'
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";
import CollectionsPreview from "../collections-preview/collections-preview";
import {CollectionsOverviewContainer} from "./collection-overview.styles";
const CollectionsOverview = ({collections}) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map( ({id , ...rest }) => (
          <CollectionsPreview key={id} {...rest}/>
        ))}
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections : selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)
