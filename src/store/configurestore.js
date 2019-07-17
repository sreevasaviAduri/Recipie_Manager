import { createStore, combineReducers } from "redux";
import RecipieReducer from "../reducers/recipiereducer";
import FilterReducer from "../reducers/filterreducer";
import { loadState, saveState } from "../localstorage/storage";

export default () => {
  const persistedState = loadState();
  const store = createStore(
    combineReducers({
      recipies: RecipieReducer,
      filters: FilterReducer
    }),
    persistedState
  );

  store.subscribe(() => {
    const state = store.getState();
    saveState(state);
    console.log("Store Save State Updated", state);
  });

  return store;
};
