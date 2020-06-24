import React from 'react'
import {ReactComponent as Logo} from "../../assets/images/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartShow} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {withRouter} from "react-router-dom";
import {signOutStart} from "../../redux/user/user.actions"
import {HeaderContainer, HeaderContent, LogoContainer, OptionsContainer, OptionLink} from "./header.styles"

const Header = (props) => { 
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          { props.currentUser ?                       
            <OptionLink as="div" onClick={() => props.signOutStart()}>SIGN OUT</OptionLink>:             
            <OptionLink className="option" to="/auth">AUTH</OptionLink>
          }   
          { props.location.pathname !== "/checkout" && <CartIcon /> }
        </OptionsContainer>     
      </HeaderContent>
      {props.show && <CartDropdown className="option"/>}
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,
  show : selectCartShow,
})

const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))
