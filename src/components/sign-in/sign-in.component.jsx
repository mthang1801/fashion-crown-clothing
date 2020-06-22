import React from 'react'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../utils/firebase.util";
import {auth} from "../../utils/firebase.util";
import {withRouter} from "react-router-dom";
import "./sign-in.styles.scss";
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
    const {email, password} = this.state;
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);  
      console.log(res);
      this.props.history.push("/")  ;
    } catch (error) {
      console.log(error)
    }
    this.setState({
      email : "" , 
      password : ""
    })
  }
  render(){
    return (
      <div className="sign-in">
        <h2>I have already an account.</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
          <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>                   
          <div className="form-actions">
            <CustomButton type="submit" variant="contained">Sign In</CustomButton>
            <CustomButton type="button" variant="contained" isGoogleSignIn onClick={signInWithGoogle}>{" "} Sign In With Google</CustomButton>                  
          </div>          
        </form>
      </div>
    )
  }
  
}

export default withRouter(SignIn)
