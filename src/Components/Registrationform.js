import React from 'react';
import './CSS/style.css';
import { Link } from 'react-router-dom';
import image from "../Components/images/image1.png";
import axios from 'axios';

class Registrationform extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
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
     /* fields["firstname"] = "";
      fields["lastname"] = "";
      fields["email"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";*/
      e.preventDefault();
      if (this.validateForm()) {
        fields["firstname"] = this.state.fields["firstname"];
        fields["lastname"] = this.state.fields["lastname"];
      fields["email"] = this.state.fields["email"];
      fields["password"] = this.state.fields["password"];
      fields["confirmpassword"] =this.state.fields["confirmpassword"];
        console.log(fields);
   
        this.setState({fields:fields});
        alert("Registration successfull");
        console.log(fields);
            
      const response = await axios.post("http://localhost:5001/registration",fields)
        console.log(response)
        if (response) {
         window.location.href='/loginForm'
         console.log(response)
                          
        }
      }     
    }
      
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your firstname.";
          }
    
          if (typeof fields["firstname"] !== "undefined") {
            if (!fields["firstname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["firstname"] = "*Please enter alphabet characters only.";
            }
          }
          if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your lastname.";
          }
    
          if (typeof fields["lastname"] !== "undefined") {
            if (!fields["lastname"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["lastname"] = "*Please enter alphabet characters only.";
            }
          }
    
    
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
          if (!fields["confirmpassword"]) {
            formIsValid = false;
            errors["confirmpassword"] = "*Please confirm your  password.";
          }
    
          if (typeof fields["confirmpassword"] !== "undefined") {
            if (!fields["confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
              formIsValid = false;
              errors["confirmpassword"] = "password mismatch";
            }
          }
          this.setState({
            errors: errors
          });
          return formIsValid;
          }
        render() {
        return (
          <div style={{display:'flex'}}>
          <div className='imageContainer'>
          <img src={image} alt="" align="left"/>
      </div>
      <div id="container-reg">
        <div className="form-wrap">
         
      <h4>New User</h4>
      <div style={{margin:"0px"}}>
      <h1>Register</h1>
     
     
     
         <form method='post' onSubmit={this.onSubmit}>
        <div className="form-group">
        
          <input type="text" name="firstname" id="first-name" placeholder='First Name' value={this.state.fields.firstname}onChange={this.handleChange}
             />
             <div className="errorMsg">{this.state.errors.firstname}</div>
        </div>
        <div className="form-group">
          
          <input type="text" name="lastname" id="last-name" placeholder='Last Name'value={this.state.fields.lastname}onChange={this.handleChange}
              />
              <div className="errorMsg">{this.state.errors.lastname}</div>
        </div>
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
        <div className='form-group'>
          <input type="password" name="confirmpassword" id="password1" placeholder='Confirm Password'value={this.state.fields.confirmpassword}onChange={this.handleChange}/>
                       <div className="errorMsg">{this.state.errors.confirmpassword}</div>
        </div>
        <button type="submit" value="register">Register</button>
        </form>
        <br/><Link to="/LoginForm" style={{ textDecoration: "none" }}  >Already have an account?</Link>
         </div>
    </div>
   
      </div>
      </div>
    
         );
        }
        }


export default Registrationform;