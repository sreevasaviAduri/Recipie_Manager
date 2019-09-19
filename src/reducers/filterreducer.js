const filtersDefaultState = {
  title: "",
  cooktime: undefined,
  text: "",
  sortBy: ""
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

export default FilterReducer;
