import uuid from "uuid";

export const addRecipie = ({
  id = uuid(),
  title = "",
  description = "",
  ingredients = "",
  directions = "",
  preparation = "",
  cooktime = null,
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

export const deleteRecipie = ({ id } = {}) => ({
  type: "DELETE_RECIPIE",
  id
});

export const editRecipie = (id, editedRecipie) => ({
  type: "EDIT_RECIPIE",
  id,
  editedRecipie
});
