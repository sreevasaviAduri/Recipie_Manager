const filtersDefaultState = {
  title: "",
  cooktime: undefined,
  text: "",
  sortBy: ""
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
    case "SORT_BY_COOKTIME":
      return {
        ...state,
        sortBy: "cooktime"
      };
    default:
      return state;
  }
};

export default FilterReducer;
