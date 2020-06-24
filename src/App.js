import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.conponent";
import AuthPage from "./pages/auth/auth.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import "./App.css";
import Spinner from "./components/spinner/spinner.component";

class App extends React.Component {
  unsubcribeAuthForm = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubcribeAuthForm();
  }
  render() {
    return (
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
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
