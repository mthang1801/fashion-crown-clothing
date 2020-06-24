import React from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../utils/firebase.util";
import {auth} from "../../utils/firebase.util";
import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./sign-in.styles.scss";
import Spinner from "../spinner/spinner.component";
class SignIn extends React.Component {
  state = {
    email : "" , 
    password : ""
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

 
  handleSubmit = async e => {
    e.preventDefault();
    const {emailSignInStart} = this.props;
    const {email, password} = this.state;
    emailSignInStart(email, password)  
    
  }
  render(){
    const {googleSignInStart} = this.props
    return (
      <div className="sign-in">
        <h2>I have already an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>                   
          <div className="form-actions">
            <CustomButton type="submit" variant="contained">Sign In</CustomButton>
            <CustomButton type="button" variant="contained" isGoogleSignIn onClick={googleSignInStart}>{" "} Sign In With Google</CustomButton>                  
          </div>          
        </form>
      </div>
    )
  } 
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(withRouter(SignIn))
