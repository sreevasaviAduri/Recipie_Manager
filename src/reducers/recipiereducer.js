const recipiesDefaultState = [];
const RecipieReducer = (state = recipiesDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPIE":
      return state.concat(action.recipie);
    case "DELETE_RECIPIE":
      return state.filter(obj => obj.id !== action.id);
    case "EDIT_RECIPIE":
      return state.map(obj =>
        obj.id === action.id ? { ...obj, ...action.editedRecipie } : obj
      );
    case "SET_RECIPIE":
      return action.recipies;
    default:
      return state;
  }
};

export default RecipieReducer;
