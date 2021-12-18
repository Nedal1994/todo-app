import React, { useState, useContext } from "react";
import { LoginContext } from "../context/loginContext";


function Signup() {
  let context = useContext(LoginContext);

  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("user");

  const handleInputUser = (e) => {
    setUserName(e.target.value);
  };
  const handleInputPass = (e) => {
    setPassword(e.target.value);
  };
  const handleInputRole = (e) => {
    setRole(e.target.value);
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();

    await context.signUp(userName, password, role);
    window.location.href = "/";
  };
  return (
    <div>
        <h1>Sign Up</h1>
                <form onSubmit={handlerSubmit}>
                  <div className="form-group">
                      <label>Username</label><br/><br/>
                    <input
                      onChange={handleInputUser}
                      type="text"
                      className="form-control rounded-left"
                      required
                    />
                  </div><br/>
                  <div className="form-group d-flex">
                  <label>Password</label><br/><br/>
                    <input
                      onChange={handleInputPass}
                      type="password"
                      className="form-control rounded-left"
                      required
                    />
                  </div><br/>
                  <div className="form-group d-flex">
                    <select
                      className="form-control rounded-left"
                      onChange={handleInputRole}
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>
                  <br /><br/>
                  <div className="form-group">
                    <button
                      type="submit"
                    >
                      Confirm & login
                    </button>
                  </div>
                </form>
           
           
          
        
    </div>
  );
}

export default Signup;