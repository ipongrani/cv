import { TOGGLE_DRAWER, SET_DRAWER_OPTION } from "./constants/action-types";


const initialState = {
  drawer: false,
  drawerOption: '',
};


const centralState = (state = initialState, action) => {

  switch (action.type) {

    case TOGGLE_DRAWER:
        return { ...state, drawer: action.payload };
    break;

    case SET_DRAWER_OPTION:
        return { ...state, drawerOption: action.payload }
    break;

    default:
      return state;
    break;
  }
};
//------


export default centralState
