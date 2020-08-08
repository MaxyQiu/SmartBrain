import React from 'react';
import './Navigation.css'
const Navigation =({onRouteChange, isSignedin})=>{
  if(isSignedin) {
    return(

    <nav style={{display:'flex',justifyContent: 'flex-end'}}>
      <p onClick={()=>onRouteChange('signout')} className=' p3 pointer underline link dim dark-blue'> Sign Out</p>
    </nav>
  );
  } else {
    return(
    <nav style={{display:'flex',justifyContent: 'flex-end'}}>
      <p onClick={()=>onRouteChange('signin')} className=' pa3 pointer underline link dim dark-blue'> Sign in   </p>
      <p onClick={()=>onRouteChange('register')} className=' pa3 pointer underline link dim dark-blue'>  Register</p>

    </nav>
);
  }

}

export default Navigation;
