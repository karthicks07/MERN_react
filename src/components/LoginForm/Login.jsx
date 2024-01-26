import React from "react";
import './Login.css'
// ...

class Login extends React.Component{
  render() {
    return (
      <div className="page-container">
        <div className="form1">
          <div className="form2">
            <center>
              <div className="logintext">Login</div>
            </center>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td><input type="text" placeholder="Name" /></td>
                  </tr>
                  <tr>
                    <td><input type="email" placeholder="Email" /></td>
                  </tr>
                  <tr>
                    <td><input type="password" placeholder="Password" /></td>
                  </tr>
                </tbody>
              </table>
              <div className="btns">
                <button className="signupbtn">Signup</button>
                <button className="loginbtn">Login</button>
              </div>
              <a href="#" className="forget-link">forget password?</a>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
  