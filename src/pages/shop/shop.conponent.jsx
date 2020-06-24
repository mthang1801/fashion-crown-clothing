import React, {useEffect} from 'react'
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoading} from "../../redux/shop/shop.selector";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import {connect} from "react-redux";
import "./shop.styles.scss";

const ShopPage = ({isCollectionsLoading, fetchCollectionsStart, match}) => {    

  useEffect(() => {
    console.log("subcribing")
    const subcribeFetchCollections = fetchCollectionsStart(); 

  },[fetchCollectionsStart])       

  return(
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
      <Route path={`/shop/:collectionId`} component={CollectionPageContainer} />
    </div>  
  )  

  
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoading : selectCollectionsLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);