import React, { Fragment, useContext } from "react";
import Sidebar from "../components/layout/Sidebar";
import Bar from "../components/layout/Bar";
import userContext from "../context/user/userContext";
import Cards from "./layout/Cards";
import Post from "./layout/Post";

const Panel = () => {
  const userCont = useContext(userContext);
  const { layoutUsers, listUsers2 } = userCont;

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Bar />
        {layoutUsers ? (
          <Fragment>
            <main>
              <div className="contenedor-tareas">
                <div className="wrapper">
                  {listUsers2.map((use) => (
                    <Cards
                      key={use.id}
                      id={use.id}
                      name={use.first_name}
                      lastname={use.last_name}
                      avatar={use.avatar}
                      email={use.email}
                    />
                  ))}
                </div>
              </div>
            </main>
          </Fragment>
        ) : (
          <Post />
        )}
      </div>
    </div>
  );
};

export default Panel;
