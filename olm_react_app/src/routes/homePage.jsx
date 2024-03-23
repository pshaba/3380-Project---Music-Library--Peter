import {React, useState} from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";


function Home() {

  const { loggedIn, loading } = useAuth();
  
  
  if (loading) {
    return <div>Loading authentication state...</div>;
  }
  
  return (
    <div>

      <h1>HOME</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      
      {loggedIn && <p>Logged in</p>}
    </div>
  );
}

export default Home;
