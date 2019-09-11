import React from "react";
import { useSelector } from "react-redux";
import Recipie from "./Recipie";
import getVisibleRecipies from "../selectors/getVisibleSelectors";
import RecipieListFilters from "./RecipieListFilters";

const ShowRecipies = props => {
  const recipiesfilterd = getVisibleRecipies(
    useSelector(state => state.recipies),
    useSelector(state => state.filters)
  );
  console.log("show recipies", useSelector(state => state.recipies));
  return (
    <div>
      <RecipieListFilters />
      {recipiesfilterd.map(recipie => (
        <Recipie recipie={recipie} />
      ))}
    </div>
  );
};

export default ShowRecipies;
