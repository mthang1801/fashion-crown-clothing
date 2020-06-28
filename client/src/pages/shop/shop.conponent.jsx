import React, {useEffect, Suspense} from 'react'
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import {default as CollectionPageContainer} from "../collection/collection.container";
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoading} from "../../redux/shop/shop.selector";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import {connect} from "react-redux";
import {ShopPageContainer} from "./shop.styles";
import Spinner from "../../components/spinner/spinner.component";


const ShopPage = ({isCollectionsLoading, fetchCollectionsStart, match}) => {    

  useEffect(() => {   
    console.log("render");
    fetchCollectionsStart(); 
  },[fetchCollectionsStart])       

  return(
    <ShopPageContainer>     
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
        <Route path={`/shop/:collectionId`} component={CollectionPageContainer} />        
    </ShopPageContainer>  
  )  

  
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoading : selectCollectionsLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);