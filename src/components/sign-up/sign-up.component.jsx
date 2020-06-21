import React from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../utils/firebase.util";
import "./sign-up.styles.scss";
class SignUp extends React.Component {
  state ={
    displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert("Password don't match!")
      return;
    }
    try {
      const res= await auth.createUserWithEmailAndPassword(email, password);      
      console.log(res)
      await createUserProfileDocument(res.user, {displayName})
    } catch (error) {
      alert("Error occurs when signing up!");
      console.log(error);
    }
    this.setState({
      displayName : "",
    email : "",
    password : "",
    confirmPassword : ""
    })
  }
  render(){
    return(
      <div className="sign-up">
        <h2 className="title">I do not have an account.</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={this.state.displayName} handleChange={this.handleChange} label="Display Name" required/>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>
          <FormInput type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} label="Confirm Password" required/>          
          <div className="form-actions">
          <CustomButton isSignUp variant="contained">Sign Up</CustomButton>
          </div>          
        </form>
      </div>
    )
  }
}

export default SignUp
