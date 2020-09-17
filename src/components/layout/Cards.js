import React, { useContext } from "react";
import userContext from "../../context/user/userContext";

const Cards = ({ name, lastname, avatar, id, email }) => {
  const userCont = useContext(userContext);
  const { getIdFn, changeLayoutFn } = userCont;

  return (
    <div className="center">
      <div className="property-card">
        <div className="property-image">
          <h2>
            {name} {lastname}
          </h2>
          <p>{email}</p>
        </div>
        <div className="property-description">
          <div className="property-image-title">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div className="estado">
        <button
          onClick={() => {
            getIdFn(id);
          }}
          type="button"
          className="incompleto"
        >
          Edit user
        </button>
        <button
          onClick={() => {
            changeLayoutFn(id);
          }}
          type="button"
          className="completo"
        >
          Posts
        </button>
      </div>
    </div>
  );
};

export default Cards;
