//import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';
import { TOGGLE_DRAWER, SET_DRAWER_OPTION } from "../reducers/constants/action-types";


export const toggleDrawer = param => ({type: TOGGLE_DRAWER, payload: param});
export const setDrawerOption = param => ({type: SET_DRAWER_OPTION, payload: param})
