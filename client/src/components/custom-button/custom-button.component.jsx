import React from 'react'
import "./custom-buttom.styles.scss";
const CustomButton = ({children,isGoogleSignIn,isSignUp,size,inverted, ...otherProps}) => {
  let variant = otherProps.variant ? otherProps.variant : "";   
  let color  = otherProps.color ? otherProps.color : "";
  let typeForm = isGoogleSignIn ? "google-sign-in" : "";
  
  return (
    <button className={`custom-button ${variant} ${color} ${typeForm} ${size ? size : ""} `}  {...otherProps}>{children}</button>
  )
}

export default CustomButton
