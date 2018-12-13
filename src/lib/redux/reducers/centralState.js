import { TOGGLE_DRAWER, SET_DRAWER_OPTION, GET_MAIN_DISPLAY,
         SET_MAIN_DISPLAY, SET_REACT_LIST, SET_NODE_LIST,
         SET_DB_LIST, SET_SIDE_BUTTONS } from "./constants/action-types";



const initialState = {
  drawer: false,
  drawerOption: '',
  mainDisplay: [],
  reactList: [],
  nodeList: [],
  dbList: [],
  sideBtns: [],
};


const centralState = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_DRAWER:
        return { ...state, drawer: action.payload }
    break;

    case SET_DRAWER_OPTION:
        return { ...state, drawerOption: action.payload }
    break;

    case SET_MAIN_DISPLAY:
        return { ...state, mainDisplay: action.payload }
    break;

    case SET_REACT_LIST:
        return { ...state, reactList: action.payload }
    break;

    case SET_DB_LIST:
        return { ...state, dbList: action.payload }
    break;

    case SET_NODE_LIST:
        return { ...state, nodeList: action.payload }
    break;

    case SET_SIDE_BUTTONS:
        return { ...state, sideBtns: action.payload }
    break;

    default:
      return state;
    break;
  }
};
//------


export default centralState
