import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoading} from "../../redux/shop/shop.selector";
import CollectionPage from "./collection.component";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
const  mapStateToProps = createStructuredSelector({
  isLoading : selectCollectionsLoading
})

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionPageContainer;