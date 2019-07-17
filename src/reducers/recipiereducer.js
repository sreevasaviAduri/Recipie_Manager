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
      console.log("EDIT RECIPIE papaaa", action.id, action.editedRecipie);
      return state.map(obj =>
        obj.id === action.id ? { ...obj, ...action.editedRecipie } : obj
      );
    default:
      return state;
  }
};

export default RecipieReducer;
