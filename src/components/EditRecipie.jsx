import React from "react";
import RecipieFormWrap from "./RecipieForm";
import { useSelector, useDispatch } from "react-redux";
import { editRecipie } from "../actions/recipies";

const EditRecipie = props => {
  const recipies = useSelector(state => state.recipies);

  const editRecipieID = recipies.find(
    recipie => recipie.id === props.match.params.id
  );

  const dispatch = useDispatch();
  console.log("edit recipie ", props);

  return (
    <div>
      <RecipieFormWrap
        recipie={editRecipieID}
        onSubmit={editedRecipie => {
          dispatch(editRecipie(props.match.params.id, editedRecipie));
          props.history.push("/show");
        }}
      />
    </div>
  );
};

export default EditRecipie;
