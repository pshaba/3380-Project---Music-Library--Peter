import {React, useState} from "react";

import { Link } from "react-router-dom";
import Register from "./registerPage";
import Login from "./loginPage";

function Home() {
  return (
    
    <div>
      <h1>HOME</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Home;
