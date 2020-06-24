import React from 'react'
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import {Route} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoading} from "../../redux/shop/shop.selector";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import {connect} from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
import "./shop.styles.scss";

class ShopPage extends React.Component {    

  componentDidMount(){   
    this.props.fetchCollectionsStart();
  }

  render(){   
    return(
      <div className="shop-page">
        <Route exact path={`${this.props.match.path}`} component={CollectionOverviewContainer}/>
        <Route path={`/shop/:collectionId`} component={CollectionPageContainer} />
      </div>  
    )  
  }
  
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoading : selectCollectionsLoading
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);