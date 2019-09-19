import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RecipieReducer from "../reducers/recipiereducer";
import FilterReducer from "../reducers/filterreducer";
import AuthReducer from "../reducers/authreducer";

export default () => {
  const store = createStore(
    combineReducers({
      recipies: RecipieReducer,
      filters: FilterReducer,
      authentication: AuthReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};
