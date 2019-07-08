import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const recipiesDefaultState = [];

const RecipieReducer = (state = recipiesDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPIE":
      console.log("Add Recipie", action.recipies);
      return state.concat(action.recipies);
    case "DELETE_RECIPIE":
      console.log("Delete Recipie", action.id);
      return state.filter(obj => obj.id !== action.id);
    case "EDIT_RECIPIE":
      console.log("EDIT RECIPIE", action.id, action.cooktime);
      return state.map(obj =>
        obj.id === action.id ? { ...obj, ...action.cooktime } : obj
      );
    default:
      return state;
  }
};

const filtersDefaultState = {
  title: "",
  cooktime: undefined,
  text: ""
};

const FilterReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      console.log("set title");
      return { ...state, title: action.title };
    case "SET_COOKTIME":
      console.log("cooktime");
      return { ...state, cooktime: action.cooktime };
    case "SET_TEXT":
      console.log("set text");
      return { ...state, text: action.text };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    recipies: RecipieReducer,
    filters: FilterReducer
  })
);

const addRecipie = ({
  id = 0,
  title = "",
  description = "",
  ingredients = "",
  directions = "",
  preparation = "",
  cooktime = 0,
  notes = ""
} = {}) => ({
  type: "ADD_RECIPIE",
  recipies: {
    id,
    title,
    description,
    ingredients,
    directions,
    preparation,
    cooktime,
    notes
  }
});

const deleteRecipie = ({ id } = {}) => (
  console.log(id),
  {
    type: "DELETE_RECIPIE",
    id
  }
);

const editRecipie = (id, cooktime) => ({
  type: "EDIT_RECIPIE",
  id,
  cooktime
});

const setTitle = title => ({
  type: "SET_TITLE",
  title
});
const setCookTime = cooktime => ({
  type: "SET_COOKTIME",
  cooktime
});
const setText = text => ({
  type: "SET_TEXT",
  text
});

store.subscribe(() => {
  const state = store.getState();
  console.log("state: ", state);
});

store.dispatch(addRecipie({ id: 4, title: "Biryani" }));
store.dispatch(addRecipie({ id: 5, title: "Rasagulla" }));
store.dispatch(deleteRecipie({ id: 5 }));
store.dispatch(editRecipie(4, { cooktime: 10 }));
store.dispatch(
  editRecipie(4, { preparation: "takes bit long , soak it overnight" })
);

store.dispatch(setTitle("biryani"));
store.dispatch(setCookTime(5));
store.dispatch(setText("without Onions"));

class ReduxSetup extends Component {
  render() {
    return (
      <div>
        <p>Started wit Recipie Redux Store</p>
      </div>
    );
  }
}

export default ReduxSetup;
