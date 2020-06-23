import React from "react";
import {createStructuredSelector} from "reselect";
import { selectCollectionsLoading} from "../../redux/shop/shop.selector";
import WithSpinner from  "../../hoc/with-spinner/with-spinner.component";
import CollectionOverView from "./collections-overview.component";
import {connect} from "react-redux";

const mapStateToProps = createStructuredSelector({
  isLoading : selectCollectionsLoading
})
const CollectionOverViewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverView));
export default CollectionOverViewContainer;