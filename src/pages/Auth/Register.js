import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth';
import { Link } from 'react-router-dom';

function Register({register}) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  
  const handleSubmit = e => {
    e.preventDefault();
    register(name, email, password);
  };

  return (
    <div className="vh-100 d-flex flex-column justify-content-around">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form1Example3">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  id="form1Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                  
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
                <input
                  type="email"
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
              </div>

              <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                <p className="small d-flex gap-3 fw-bold mt-2 pt-1 mb-0">
                  <span>Have an account?</span>
                  <Link to="/login" className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(()=>({}), {register})(Register);
