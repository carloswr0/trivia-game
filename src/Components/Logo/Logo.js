import React from 'react';
import './Logo.css';
//import logo from '../../eip.png'; // Tell webpack this JS file uses this image

function Logo() {
  return (
    <div className="Logo">
      {/*<img src={logo} alt="EIP" />*/}
      <span>CW</span>
    </div>
  );
}

export default Logo;
