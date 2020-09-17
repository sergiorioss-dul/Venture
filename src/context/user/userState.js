import React, { useReducer, useEffect } from "react";
import axios from "axios";
import userContext from "./userContext";
import userReducer from "./userReducer";
import {
  LIST_USER,
  GET_ID,
  ACTIVE_POST,
  POSTS,
  RETURN_PANEL,
  DELETE_POST,
  GET_SECPAGE,
  ALBUM_ACTIVE,
  BUTTON_BACK,
  ID_GALLERY,
  SAVE_PHOTOS,
  STATE_PHOTOS,
  GALERY_ACTIVE,
  CANCEL_EDIT,
  EDIT_USER,
  SPINNER_GALERY,
  SPINNER_LOADING,
  TOKEN,
  TOKEN_STATE,
  SPINNER_EDIT,
} from "../../types";

const UserState = (props) => {
  const initialState = {
    editUser: false,
    layoutUsers: true,
    layoutPost: false,
    listUsers2: [],
    userActually: null,
    listPosts: [],
    buttonAlbum: true,
    buttonBack: false,
    pageId: 0,
    apiPhotos: [],
    galeryState: [],
    galeryActive: false,
    token: false,
    loadingState: false,
    loadingGalery: false,
    loadingEdit: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const tokenChange = () => {
    dispatch({
      type: TOKEN_STATE,
    });
  };

  //User active
  const getIdFn = (id) => {
    dispatch({
      type: SPINNER_EDIT,
    });
    const scroll = document.querySelector(".app-header");
    scroll.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      dispatch({
        type: GET_ID,
        payload: id,
      });
    }, 1000);
  };

  //Change Layout
  const changeLayoutFn = (id) => {
    dispatch({
      type: ACTIVE_POST,
      payload: id,
    });
  };

  //Return Panel
  const backPanelFn = () => {
    dispatch({
      type: RETURN_PANEL,
    });
  };
  //Delete post
  const deletePostFn = (id) => {
    console.log(id);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
  };

  //Botones para moverse en la página
  const buttonGoPanelFn = () => {
    dispatch({
      type: ALBUM_ACTIVE,
    });
  };
  //ButtonBack
  const buttonGoAlbumFn = () => {
    dispatch({
      type: BUTTON_BACK,
    });
  };

  const actuallyIdGaleryFn = (id) => {
    console.log(id);
    dispatch({
      type: ID_GALLERY,
      payload: id,
    });
  };

  const galeryStateFn = () => {
    dispatch({
      type: GALERY_ACTIVE,
    });
  };

  const getGaleryFn = () => {
    dispatch({
      type: SPINNER_GALERY,
    });
    setTimeout(() => {
      dispatch({
        type: STATE_PHOTOS,
      });
    }, 2000);
  };
  const cancelEditFn = () => {
    dispatch({
      type: CANCEL_EDIT,
    });
  };

  const editUserFn = (user) => {
    console.log(user);
    dispatch({
      type: EDIT_USER,
      payload: user,
    });
  };

  const saveTokenFn = (token) => {
    dispatch({
      type: TOKEN,
      payload: token,
    });
  };

  useEffect(() => {
    const getPhotosFn = async () => {
      const url = `https://jsonplaceholder.typicode.com/photos`;
      const res = await axios.get(url);
      dispatch({
        type: SAVE_PHOTOS,
        payload: res.data,
      });
    };
    const getUsers = async () => {
      const url = `https://reqres.in/api/users?page=1`;
      const res = await axios.get(url);
      dispatch({
        type: LIST_USER,
        payload: res.data.data,
      });
    };
    const getSecondPage = async () => {
      const url = `https://reqres.in/api/users?page=2`;
      const res = await axios.get(url);
      dispatch({
        type: GET_SECPAGE,
        payload: res.data.data,
      });
    };
    const getPosts = async () => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      const res = await axios.get(url);
      dispatch({
        type: SPINNER_LOADING,
      });
      setTimeout(() => {
        dispatch({
          type: POSTS,
          payload: res.data,
        });
      }, 2000);
    };
    if (state.layoutPost) {
      getPosts();
    }

    getUsers();
    getSecondPage();
    getPhotosFn();
  }, [state.layoutPost, state.galeryActive, state.loadingEdit]);

  return (
    <userContext.Provider
      value={{
        editUser: state.editUser,
        listUsers: state.listUsers,
        userActually: state.userActually,
        layoutUsers: state.layoutUsers,
        layoutPost: state.layoutPost,
        listPosts: state.listPosts,
        listUsers2: state.listUsers2,
        buttonAlbum: state.buttonAlbum,
        buttonBack: state.buttonBack,
        pageId: state.pageId,
        galeryState: state.galeryState,
        loadingState: state.loadingState,
        loadingGalery: state.loadingGalery,
        loadingEdit: state.loadingEdit,
        token: state.token,
        getIdFn,
        saveTokenFn,
        changeLayoutFn,
        backPanelFn,
        deletePostFn,
        actuallyIdGaleryFn,
        galeryStateFn,
        getGaleryFn,
        buttonGoAlbumFn,
        buttonGoPanelFn,
        cancelEditFn,
        editUserFn,
        tokenChange,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
