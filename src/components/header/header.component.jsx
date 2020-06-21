import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/images/crown.svg";
import {auth} from "../../utils/firebase.util";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartShow} from "../../redux/cart/cart.selectors";
import {selectCurrentUser, selectUserLoading} from "../../redux/user/user.selectors";
import {withRouter} from "react-router-dom";

import "./header.styles.scss";

const Header = (props) => { 
  
  return (
    <div className="header">
      <div className="header-content">
        <Link className="logo-container" to="/">
          <Logo src={Logo} className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">SHOP</Link>
          { props.currentUser ?                       
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>: 
            props.loading ? "" : 
            <Link className="option" to="/auth">AUTH</Link>
          }   
          { props.location.pathname !== "/checkout" && <CartIcon /> }
        </div>     
      </div>
      {props.show && <CartDropdown className="option"/>}
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  show : selectCartShow,
  loading : selectUserLoading
})

export default withRouter(connect(mapStateToProps)(Header))
