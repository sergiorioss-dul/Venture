import React, { Fragment, useContext, useState } from "react";
import userContext from "../../context/user/userContext";

const FormEdit = () => {
  const userCont = useContext(userContext);
  const { userActually, cancelEditFn, editUserFn } = userCont;

  const [actualUser, getActualuser] = useState({
    id: userActually.id,
    first_name: userActually.first_name,
    last_name: userActually.last_name,
    email: userActually.email,
    avatar: userActually.avatar,
  });

  const onChangeUser = (e) => {
    getActualuser({
      ...actualUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitUser = (e) => {
    e.preventDefault();
    editUserFn(actualUser);
  };

  return (
    <Fragment>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitUser}>
        <img className="card-header" src={userActually.avatar} alt="" />
        <p>Name:</p>
        <input
          type="text"
          className="input-text wrapp"
          name="first_name"
          onChange={onChangeUser}
          value={actualUser.first_name}
        />
        <p>LastName:</p>
        <input
          type="text"
          className="input-text wrapp"
          name="last_name"
          onChange={onChangeUser}
          value={actualUser.last_name}
        />
        <p>Email:</p>
        <input
          type="text"
          className="input-text"
          name="email"
          onChange={onChangeUser}
          value={actualUser.email}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Edit User"
        />
      </form>

      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => cancelEditFn()}
      >
        Cancel
      </button>
    </Fragment>
  );
};

export default FormEdit;
