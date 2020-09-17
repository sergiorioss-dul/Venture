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
  SPINNER_LOADING,
  SPINNER_GALERY,
  TOKEN,
  TOKEN_STATE,
  SPINNER_EDIT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    //Obtiene el id del usuario
    case GET_ID:
      return {
        ...state,
        userActually: state.listUsers2.find(
          (user) => user.id === action.payload
        ),
        editUser: true,
        loadingEdit: false,
      };
    //Obtener datos de la API
    case LIST_USER:
      return {
        ...state,
        listUsers: action.payload,
      };

    //Cambiar Layout
    case ACTIVE_POST:
      return {
        ...state,
        layoutUsers: false,
        layoutPost: true,
        userActually: state.listUsers2.find(
          (user) => user.id === action.payload
        ),
      };
    case POSTS:
      return {
        ...state,
        listPosts: action.payload.filter(
          (post) => post.userId === state.userActually.id
        ),
        loadingState: false,
      };
    case RETURN_PANEL:
      return {
        ...state,
        layoutPost: false,
        layoutUsers: true,
      };
    case DELETE_POST:
      return {
        ...state,
        listPosts: state.listPosts.filter((post) => post.id !== action.payload),
      };
    case GET_SECPAGE:
      return {
        ...state,
        listUsers2: state.listUsers.concat(action.payload),
      };
    case ALBUM_ACTIVE:
      return {
        ...state,
        buttonAlbum: true,
        buttonBack: false,
      };
    case BUTTON_BACK:
      return {
        ...state,
        buttonAlbum: false,
        buttonBack: true,
        galeryActive: false,
      };
    case ID_GALLERY:
      return {
        ...state,
        pageId: parseInt(action.payload),
      };
    case SAVE_PHOTOS:
      return {
        ...state,
        apiPhotos: action.payload,
      };
    case STATE_PHOTOS:
      return {
        ...state,
        galeryState: state.apiPhotos.filter(
          (photo) => photo.albumId === state.pageId
        ),
        loadingGalery: false,
      };
    case GALERY_ACTIVE:
      return {
        ...state,
        galeryActive: true,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        editUser: false,
      };
    case EDIT_USER:
      return {
        ...state,
        listUsers2: state.listUsers2.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        editUser: false,
      };
    case SPINNER_LOADING:
      return {
        ...state,
        loadingState: true,
      };
    case SPINNER_GALERY:
      return {
        ...state,
        loadingGalery: true,
      };
    case TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case TOKEN_STATE:
      return {
        ...state,
        token: false,
      };
    case SPINNER_EDIT:
      return {
        ...state,
        loadingEdit: true,
      };
    default:
      return state;
  }
};
