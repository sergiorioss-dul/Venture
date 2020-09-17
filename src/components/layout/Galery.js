import React, { useContext, useEffect } from "react";
import Sidebar from "./Sidebar";
import Bar from "./Bar";
import { useParams } from "react-router-dom";
import userContext from "../../context/user/userContext";
import Spinner from "../Spinner";

const Galery = () => {
  const useCont = useContext(userContext);
  const {
    actuallyIdGaleryFn,
    galeryState,
    galeryActive,
    getGaleryFn,
    loadingGalery,
  } = useCont;
  const idParam = useParams().id;

  useEffect(() => {
    if (idParam > 0) {
      actuallyIdGaleryFn(idParam);
      getGaleryFn(idParam);
    }
    // eslint-disable-next-line
  }, [galeryActive]);
  return (
    <div>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Bar />
          <h1>Galery</h1>
          {loadingGalery ? (
            <Spinner />
          ) : (
            galeryState.map((image) => (
              <img key={image.id} src={image.thumbnailUrl} alt="Paris" />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Galery;
