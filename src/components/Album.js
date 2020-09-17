import React, { useContext } from "react";
import Sidebar from "./layout/Sidebar";
import Bar from "./layout/Bar";
import userContext from "../context/user/userContext";
import { Link } from "react-router-dom";

const Album = () => {
  const userCont = useContext(userContext);
  const { listUsers2, galeryStateFn } = userCont;

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        <ul className="listado-tareas mg">
          <h1>Select an Album</h1>
          {listUsers2.map((use) => (
            <li key={use.id}>
              <Link
                onClick={() => galeryStateFn()}
                to={`/panel-users/albums/${use.id}`}
              >
                <h3>
                  {use.id}. {use.first_name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Album;
