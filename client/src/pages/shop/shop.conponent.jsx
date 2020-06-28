import React, {useEffect, Suspense, lazy} from 'react'
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoading} from "../../redux/shop/shop.selector";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import {connect} from "react-redux";
import {ShopPageContainer} from "./shop.styles";
import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview.container"));
const CollectionPageContainer = lazy(() => import("../collection/collection.container"));

const ShopPage = ({fetchCollectionsStart, match}) => {    

  useEffect(() => {   
    console.log("render");
    fetchCollectionsStart(); 
  },[fetchCollectionsStart])       

  return(
    <ShopPageContainer>     
      <Suspense fallback={<Spinner/>}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
        <Route path={`/shop/:collectionId`} component={CollectionPageContainer} />      
      </Suspense>
         
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