import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selector";
import CollectionPage from "./collection.component";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;