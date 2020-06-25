import React , {useState} from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./sign-in.styles.scss";

const SignIn = ({googleSignInStart, emailSignInStart}) =>  {
  const [userCredentials, setUserCredentials] = useState({email : "", password : ""});
  
  const handleChange = (e) => {
    const {name, value} = e.target;
   setUserCredentials({...userCredentials, [name] : value})
  }

 
  const handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = userCredentials;
    emailSignInStart(email, password)      
  }  

  return (
    <div className="sign-in">
      <h2>I have already an account.</h2>
      <span>Sign in with your email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={userCredentials.email} handleChange={handleChange} label="Email" required/>
        <FormInput type="password" name="password" value={userCredentials.password} handleChange={handleChange} label="Password" required/>                   
        <div className="form-actions">
          <CustomButton type="submit" variant="contained">Sign In</CustomButton>
          <CustomButton type="button" variant="contained" isGoogleSignIn onClick={googleSignInStart}>{" "} Sign In With Google</CustomButton>                  
        </div>          
      </form>
    </div>
  )  
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart : () => dispatch(googleSignInStart()),
  emailSignInStart : (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(withRouter(SignIn))
