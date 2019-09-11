import { createStore, combineReducers, applyMiddleware } from "redux";
import RecipieReducer from "../reducers/recipiereducer";
import FilterReducer from "../reducers/filterreducer";
//import { loadState, saveState } from "../localstorage/storage";
import thunk from "redux-thunk";

export default () => {
  //const persistedState = loadState();
  const store = createStore(
    combineReducers({
      recipies: RecipieReducer,
      filters: FilterReducer
    }),
    applyMiddleware(thunk)
    //persistedStates
  );

  console.log("State.recipies-------", store.getState());
  // store.subscribe(() => {
  //   const state = store.getState();
  //   saveState(state);
  //   console.log("Store Save State Updated", state);
  // });

  return store;
};
