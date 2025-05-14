import React, { useState } from "react";
import Axios from "axios";
import "./register.css";

const Url = "http://localhost:9000/university";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [con_password, setCon_Password] = useState("");
  const HandleSubmit = (e) => {
    // e.preventDefault();
    Axios.post(Url + "/userregister", {
      name: name,
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" form">
      <form className="container">
        <h3>User Registration Form :</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Name :"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            placeholder="Email-Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <label>confirm Password: </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={con_password}
            onChange={(e) => setCon_Password(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-btn">
          <button type="submit" onClick={HandleSubmit} value="Register Now">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
