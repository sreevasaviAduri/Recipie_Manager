import { database } from "../firebase/firebase";

export const addRecipie = recipie => ({
  type: "ADD_RECIPIE",
  recipie
});

export const startAddRecipies = (recipiesData = {}) => {
  return dispatch => {
    const {
      title = "",
      description = "",
      ingredients = "",
      directions = "",
      preparation = "",
      cooktime = null,
      notes = ""
    } = recipiesData;
    const recipie = {
      title,
      description,
      ingredients,
      directions,
      preparation,
      cooktime,
      notes
    };
    database
      .ref("recipies")
      .push(recipie)
      .then(res => {
        dispatch(
          addRecipie({
            id: res.key,
            ...recipie
          })
        );
      });
  };
};
export const deleteRecipie = id => ({
  type: "DELETE_RECIPIE",
  id
});

export const startDeleteRecipie = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`recipies/${id}`)
      .remove()
      .then(() => {
        dispatch(deleteRecipie(id));
      });
  };
};

export const editRecipie = (id, editedRecipie) => {
  return {
    type: "EDIT_RECIPIE",
    id,
    editedRecipie
  };
};

export const updateEditRecipie = (id, editedRecipie) => {
  return dispatch => {
    return database
      .ref(`recipies/${id}`)
      .update(editedRecipie)
      .then(() => {
        dispatch(editRecipie(id, editedRecipie));
      });
  };
};

export const setRecipie = recipies => {
  return {
    type: "SET_RECIPIE",
    recipies
  };
};

export const startSetRecipies = () => {
  return dispatch => {
    return database
      .ref("recipies")
      .once("value")
      .then(snapShot => {
        const recipies = [];
        snapShot.forEach(childSnapShot => {
          recipies.push({
            id: childSnapShot.key,
            ...childSnapShot.val()
          });
        });
        dispatch(setRecipie(recipies));
      });
  };
};
