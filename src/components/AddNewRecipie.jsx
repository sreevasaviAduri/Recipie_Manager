import React from "react";
import RecipieFormWrap from "./RecipieForm";
import { useDispatch } from "react-redux";
import { startAddRecipies } from "../actions/recipies";

const AddNewRecipie = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <RecipieFormWrap
        onSubmit={recipie => {
          dispatch(startAddRecipies(recipie));
          props.history.push("/show");
        }}
      />
    </div>
  );
};

export default AddNewRecipie;
