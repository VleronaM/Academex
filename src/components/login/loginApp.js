import React, { useState } from "react";
import Login from "./Login"; // Correct import path
import Register from "./Register";
import '../../App.css';
// import Header from "../Common/Common/Header"; 

function LoginApp() {
  const [currentForm, setCurrentForm] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <div className="loginApp">
        {currentForm === 'login' ? (
          <Login
            onFormSwitch={toggleForm}
            setLoggedIn={setLoggedIn} 
            setUserRole={setUserRole} 
          />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default LoginApp;
