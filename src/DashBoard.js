import React from 'react'
import { useAuth } from './storeApi'


export function display(auth) {
  return {
    display: auth ? "block" : "none"
  };
}


export const DashBoard =() => {
  const {logOut, auth} = useAuth();
  const handleLogout =()=>{
    logOut();
  }
  return (
    <>
    <h1>Dashboard</h1>
    <button  className="btn btn-outline-success my-2 my-sm-0"
    type="submit" onClick={handleLogout} style={display(auth)}>Logout</button>

  </>
  )
}
