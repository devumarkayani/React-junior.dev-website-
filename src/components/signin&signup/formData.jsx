import Axios from "axios";
import React, { useState } from "react";
import "./formData.css";

const Url = "http://localhost:9000/university";
const FormData = () => {
  const [my_username, setUsername] = useState("");
  const [my_password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    Axios.post(Url + "/userlogin", {
      username: my_username,
      password: my_password,
      
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setPassword("");
    setUsername("");
  };
  return (
    <div className=" form">
      <form className="container">
        <h3>LOGIN:</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter the Username"
            value={my_username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter the Password"
            value={my_password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-btn">
          <button type="submit" onClick={HandleSubmit} value="login">
            Login
          </button>
        </div>
        <div className="registration-text">
          <p>
            Not register yet
            <br />
            <a href="">register Here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormData;
