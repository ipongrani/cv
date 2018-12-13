//import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { TOGGLE_DRAWER, SET_DRAWER_OPTION, GET_MAIN_DISPLAY,
         SET_MAIN_DISPLAY, SET_REACT_LIST, SET_DB_LIST,
         SET_NODE_LIST, SET_SIDE_BUTTONS } from "../reducers/constants/action-types";


export const toggleDrawer = param => ({type: TOGGLE_DRAWER, payload: param});
export const setDrawerOption = param => ({type: SET_DRAWER_OPTION, payload: param});
export const setMainDisplay = param => ({type: SET_MAIN_DISPLAY, payload: param});
export const setReactList = param => ({type: SET_REACT_LIST, payload: param});
export const setDdList = param => ({type: SET_DB_LIST, payload: param});
export const setNodeList = param => ({type: SET_NODE_LIST, payload: param});
export const setSideButtons = param => ({type: SET_SIDE_BUTTONS, payload: param});
