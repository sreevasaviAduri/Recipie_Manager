import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const recipiesDefaultState = [];

const saveState = state => {
  const recipiesDate = JSON.stringify(state);
  localStorage.setItem("recipie", recipiesDate);
};
const RecipieReducer = (state = recipiesDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPIE":
      return state.concat(action.recipies);
    case "DELETE_RECIPIE":
      return state.filter(obj => obj.id !== action.id);
    case "EDIT_RECIPIE":
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
  text: "",
  sortBy: "cooktime"
};

const FilterReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.title };
    case "SET_COOKTIME":
      return { ...state, cooktime: action.cooktime };
    case "SET_TEXT":
      return { ...state, text: action.text };
    case "SORT_BY_COOKTIME":
      return {
        ...state,
        sortBy: "cooktime"
      };
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
  id = uuid(),
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

const deleteRecipie = ({ id } = {}) => ({
  type: "DELETE_RECIPIE",
  id
});

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
const sortByCookTime = () => ({
  type: "SORT_BY_COOKTIME"
});

const getVisibleRecipies = (recipies, filters) => {
  if (filters.cooktime) {
    return recipies.filter(recipie => {
      console.log("cooktimefilter");
      const cooktimefilter = recipie.cooktime === filters.cooktime;
      return cooktimefilter;
    });
  } else if (filters.title) {
    return recipies.filter(recipie => {
      console.log("titl filter");
      const recipieTitle = recipie.title.toLowerCase();
      const filtertitle = filters.title.toLowerCase();
      const titleMatch = recipieTitle.includes(filtertitle);
      return titleMatch;
    });
  } else if (filters.text) {
    return recipies.filter(recipie => {
      console.log("text filter");
      const recipieIngredients = recipie.ingredients.toLowerCase();
      const filterstext = filters.text.toLowerCase();
      const textMatch = recipieIngredients.includes(filterstext);
      return textMatch;
    });
  } else if (filters.sortBy) {
    return recipies.sort((a, b) => {
      if (filters.sortBy === "cooktime") {
        return a.cooktime > b.cooktime ? 1 : -1;
      }
    });
  } else {
    return recipies;
  }
};

store.subscribe(() => {
  const state = store.getState();
  const recipiesData = JSON.parse(localStorage.getItem("recipie"));
  console.log("recipie data", recipiesData);
  if (recipiesData) {
    const recipies = JSON.stringify(recipiesData);
    localStorage.setItem("recipie", recipies);
  } else {
    const recipies = JSON.stringify(state);
    localStorage.setItem("recipie", recipies);
  }
  console.log("state: ", state);
  const visibleRecipies = getVisibleRecipies(
    recipiesData.recipies,
    recipiesData.filters
  );
  console.log("visibility", visibleRecipies);
});

const recipie1 = store.dispatch(
  addRecipie({ title: "Biryani", cooktime: 10, ingredients: "onions" })
);
store.dispatch(
  addRecipie({
    title: "Rasagulla",
    cooktime: 5,
    ingredients: "chilli, onions"
  })
);
// store.dispatch(
//   addRecipie({ title: "Rasagulla", cooktime: 16, ingredients: "salt" })
// );
//store.dispatch(deleteRecipie({ id: recipie1.recipies.id }));
//store.dispatch(editRecipie(4, { cooktime: 10 }));
//store.dispatch(
//editRecipie(4, { preparation: "takes bit long , soak it overnight" })
//);

//store.dispatch(setTitle("rasagulla"));
//store.dispatch(setCookTime(16));
// store.dispatch(setText("without Onions"));
//store.dispatch(setText("on"));
store.dispatch(sortByCookTime());

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
