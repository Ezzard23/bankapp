import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "C:/Users/cqezz/OneDrive/Desktop/bankAppFrontend/bankapp/src/stylesheets/LoginPage.css"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: null,
          password: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        //authentication logic here
        console.log("Email:", this.state.email);
        console.log("Password:", this.state.password);
      }
    
      handleEmailChange(e) {
        this.setState({ email: e.target.value });
      }
    
      handlePasswordChange(e) {
        this.setState({ password: e.target.value });
      }

    render() {
      return <div>
        <div className="Login-form-container">
            <form className="Login-form">
                <div className="Login-form-content">
                    <h3 className="Login-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email Address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter Email"
                            onChange = {this.handleEmailChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Password"
                            onChange = {this.handlePasswordChange}
                        />
                    </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                    Submit
                    </button>
                </div>
                <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            
        </div>
      </div>;
    }
  }

  export default LoginPage;