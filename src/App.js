

import React from 'react';  
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom'  
import './App.css';  
import Registrationform from "./Components/Registrationform";
import LoginForm from './Components/LoginForm';


 function App(){

return(
  <Router>
    <div className='App'>
    <sidebar></sidebar>
    <Routes>  
    
      <Route path="/" component={LoginForm} index element={<LoginForm />} /> 
      <Route path="/LoginForm" component={LoginForm} index element={<LoginForm />} /> 
      <Route path="/Registrationform" component={Registrationform} index element={<Registrationform />} />
       
      
     
    </Routes>
    </div>
  </Router>  
); 
 } 

export default App;