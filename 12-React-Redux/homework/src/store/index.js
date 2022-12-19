import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
