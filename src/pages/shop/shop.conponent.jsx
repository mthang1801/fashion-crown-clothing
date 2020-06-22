import React from 'react'
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {Route} from "react-router-dom";
import {firestore, convertCollectionsSnapshotToMap} from "../../utils/firebase.util";
import { updateCollections } from "../../redux/shop/shop.actions";
import {connect} from "react-redux";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
import "./shop.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {   
  state ={
    loading : true 
  }
  unsubcribeFromSnapshot = null ; 
  componentDidMount(){
    const collectionsRef = firestore.collection("collections");
    collectionsRef.onSnapshot(async snapshot => {       
      const collections = await convertCollectionsSnapshotToMap(snapshot.docs)     
      this.props.updateCollections(collections);
      this.setState({loading : false });
    })
  }
  render(){
    const {loading} = this.state;
    return(
      <div className="shop-page">
        <Route exact path={`${this.props.match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`/shop/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>  
    )  
  }
  
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);