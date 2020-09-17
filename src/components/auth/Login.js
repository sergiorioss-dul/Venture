import axios from "axios";
import React, { useState, useContext, Fragment } from "react";
import { Redirect } from "react-router-dom";
import userContext from "../../context/user/userContext";

const Login = () => {
  const userCont = useContext(userContext);
  const { saveTokenFn, token } = userCont;

  //State
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });
  const [error, changeError] = useState(false);
  const [userError, changeUserError] = useState(false);

  const { email, password } = user;

  const onChangePage = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitToken = async () => {
    if (email.trim() === "" || password.trim() === "") {
      //mostrarAlerta('Todos los campos son obligatorios','alerta-error');
      changeError(true);
      return;
    }
    changeError(false);
    try {
      let res = await axios.post("https://reqres.in/api/login", user);
      saveTokenFn(res.data);
    } catch (error) {
      changeUserError(true);
    }
  };

  return (
    <Fragment>
      {token === false ? (
        <div className="form-usuario">
          <div className="contenedor-form">
            <h1>Sign In</h1>

            <form>
              <div className="campo-form">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eve.holt@reqres.in"
                  value={email}
                  onChange={onChangePage}
                />
              </div>
              <div className="campo-form">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Any works"
                  onChange={onChangePage}
                />
              </div>
              <div className="campo-form">
                <input
                  type="button"
                  className="btn btn-primario btn-block"
                  value="Log In"
                  onClick={() => onSubmitToken()}
                />
              </div>
            </form>
            {error ? (
              <h1 className="alerta-error">All fields are required</h1>
            ) : null}
            {userError ? (
              <h1 className="alerta-error">User Incorrect</h1>
            ) : null}
          </div>
        </div>
      ) : (
        <Redirect to="/panel-users/" />
      )}
    </Fragment>
  );
};

export default Login;
