import React from 'react';
import "./spinner.styles.scss";
import Modal from "../modal/modal.component";
const Spinner = () => {
  return (
    <div className="spinner">
      <Modal/>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    
  )
}

export default Spinner
