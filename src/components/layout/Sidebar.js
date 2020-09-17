import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import userContext from "../../context/user/userContext";
import Spinner from "../Spinner";
import FormEdit from "./FormEdit";

const Sidebar = () => {
  const userCont = useContext(userContext);
  const {
    userActually,
    editUser,
    layoutUsers,
    layoutPost,
    backPanelFn,
    buttonAlbum,
    buttonBack,
    buttonGoPanelFn,
    buttonGoAlbumFn,
    loadingEdit,
  } = userCont;

  return (
    <aside>
      <h1>
        Venture<span>App</span>
      </h1>
      <div className="proyectos">
        {loadingEdit ? (
          <Spinner />
        ) : (
          <Fragment>
            {editUser && layoutUsers ? (
              <Fragment>
                <FormEdit userActually={userActually} />
              </Fragment>
            ) : layoutPost ? (
              <div>
                <img className="center" src={userActually.avatar} alt="" />
                <b></b>
                <h2>{userActually.first_name}</h2>
                <h2>{userActually.last_name}</h2>
                <h3>{userActually.email}</h3>
                <button
                  type="button"
                  className="btn btn-block btn-primario"
                  onClick={() => backPanelFn()}
                >
                  Back Users
                </button>
              </div>
            ) : (
              <Fragment>
                {buttonAlbum === true && buttonBack === false ? (
                  <Fragment>
                    <h2>Select a user and update it here!!</h2>

                    <Link to={"/panel-users/albums"}>
                      <button
                        type="button"
                        className="btn btn-block btn-primario"
                        onClick={() => buttonGoAlbumFn()}
                      >
                        Albums
                      </button>
                    </Link>
                  </Fragment>
                ) : null}
                {buttonAlbum === false && buttonBack === true ? (
                  <Link to={'/panel-users/'}>
                  <button
                      type="button"
                      className="btn btn-block btn-primario"
                      onClick={()=>buttonGoPanelFn()}
                  >Return Panel User</button>
                  </Link>
                ) : null}
                <br></br>
                <br></br>
              </Fragment>
            )}
          </Fragment>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
