import { createStore, combineReducers } from "redux";
import RecipieReducer from "../reducers/recipiereducer";
import FilterReducer from "../reducers/filterreducer";
export default () => {
  const store = createStore(
    combineReducers({
      recipies: RecipieReducer,
      filters: FilterReducer
    })
  );
  return store;
};
