import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
import Signup from "./Signup";
// ...

const Login =()=>{
    return (
      <div className="page-container">
        <div className="form1">
          <div className="form2">
          <h1 className="lh1">KNT Transports</h1>
          <div className="lin"></div>
            <center>
              <div className="logintext">Login</div>
            </center>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td><input type="email" placeholder="Email" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btns">
               <Link to="/signup"><button className="signupbtn">Signup</button></Link>
                <button className="loginbtn">Login</button>
              </div>
              <a href="#" className="forget-link">forget password?</a>

            </form>
          </div>
        </div>
      </div>
    );
  }

export default Login
  