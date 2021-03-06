import React, {useState} from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {signUpStart} from "../../redux/user/user.actions"
import "./sign-up.styles.scss";
const SignUp = ({signUpStart}) => {

  const [userCredentials, setUserCredentials ] = useState({
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })  

  const handleChange = e => {
    const {name, value}= e.target;
    setUserCredentials({...userCredentials , [name] : value });
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = userCredentials;   
    if(password !== confirmPassword){
      alert("Password don't match!")
      return;
    }
    signUpStart(displayName, email, password);

  } 
  return(
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="displayName" value={userCredentials.displayName} handleChange={handleChange} label="Display Name" required/>
        <FormInput type="email" name="email" value={userCredentials.email} handleChange={handleChange} label="Email" required/>
        <FormInput type="password" name="password" value={userCredentials.password} handleChange={handleChange} label="Password" required/>
        <FormInput type="password" name="confirmPassword" value={userCredentials.confirmPassword} handleChange={handleChange} label="Confirm Password" required/>          
        <div className="form-actions">
        <CustomButton isSignUp variant="contained">Sign Up</CustomButton>
        </div>          
      </form>
    </div>
  )  
}

const mapDispatchToProps = dispatch => ({
  signUpStart : (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
})
export default connect(null, mapDispatchToProps)(SignUp)
