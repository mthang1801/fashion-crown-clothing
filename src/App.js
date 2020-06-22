import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.conponent";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionsAndItems,
} from "./utils/firebase.util";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Spinner from "./components/spinner/spinner.component";

class App extends React.Component {
  state = {
    loading: true,
  };
  unsubcribeAuthForm = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubcribeAuthForm = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubcribeAuthForm();
  }
  render() {
    if (this.state.loading) return <Spinner />;
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              path="/auth"
              render={(props) =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <AuthPage {...props} />
                )
              }
            />
            <Route
              exact
              path="/checkout"
              render={(props) =>
                this.props.loading ? (
                  ""
                ) : this.props.currentUser ? (
                  <CheckoutPage {...props} />
                ) : (
                  <AuthPage {...props} />
                )
              }
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
