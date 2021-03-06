// src/js/store/index.js
import { createStore, compose } from "redux";
import rootReducer from "../reducers/index";


const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


);

export default store;
