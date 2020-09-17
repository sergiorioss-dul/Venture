import React, { useContext } from "react";
import userContext from "../../context/user/userContext";

const Bar = () => {
  const useCont = useContext(userContext);
  const { layoutPost, tokenChange } = useCont;

  return (
    <header className="app-header">
      {layoutPost ? (
        <p className="nombre-usuario">Publications</p>
      ) : (
        <p className="nombre-usuario">
          Hi! <span>Good to see you again</span>
        </p>
      )}
      <nav className="nav-principal">
        <a
          href="/"
          className="btn btn-blank cerrar-sesion"
          onClick={() => tokenChange()}
        >
          Log out
        </a>
      </nav>
    </header>
  );
};

export default Bar;
