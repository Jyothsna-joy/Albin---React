import React from 'react';
import './CSS/style.css';
import { Link } from 'react-router-dom';
import image from "../Components/images/image1.png";
import axios from 'axios';
class LoginForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields:fields
      });

    }
    onSubmit = async (e) => {
       let fields = {};
      /*  fields["firstname"] = "";
        fields["lastname"] = "";
        fields["email"] = "";
        fields["password"] = "";
        fields["confirmpassword"] = "";*/
      e.preventDefault();
      fields["email"] = this.state.fields["email"];
      fields["password"] = this.state.fields["password"];
      if (this.validateForm()) {
        console.log(fields);
       this.setState({fields:fields});
     

        alert("Login successfull");
        console.log(fields);
          
      const response = await axios
        .post("http://localhost:5001/login",fields)
        console.log(response)
        if (response) {
         window.location.href='/Registrationform'
               
          
        }
      }     
    }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
       
          if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
          }
    
          if (typeof fields["email"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
              formIsValid = false;
              errors["email"] = "*Please enter valid email-ID.";
            }
          }
          if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
          }
    
          if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              errors["password"] = "*Please enter secure and strong password.";
            }
          }
          this.setState({
            errors: errors
          });
          return formIsValid;
          }
        render() {
        return (
          <div style={{display:"flex",alignItems:"center"}}>
          <div className='imageContainer'>
          <img src={image} alt="" align="left"/>
      </div>
        
      <div id="container">
        <div className="form-wrap">
     
            <h1>Login</h1>
     
     
         <form method='post' onSubmit={this.onSubmit}>
        <div className="form-group">
          <input type="email" name="email" id="email" placeholder='Email' value={this.state.fields.email}onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.email}</div>
        </div>
        <div className="form-group">
          <input type="password" name="password" id="password" placeholder='Password'value={this.state.fields.password}onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
        </div>
        <button type="submit" value="register">Login</button>
        </form>
        <Link to="/" style={{ textDecoration: "none" }}  >
         <br/>Forgot password?
         </Link><br/>
         <Link to="/Registrationform" style={{ textDecoration: "none" }}  >
         Don't have an account? Create one.
         </Link>
    </div>
      </div>
      </div>
    
         );
        }
        }


export default LoginForm;