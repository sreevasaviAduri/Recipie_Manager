import React from "react";
import { useSelector } from "react-redux";
import Recipie from "./Recipie";
import getVisibleRecipies from "../selectors/getVisibleSelectors";
import RecipieListFilters from "./RecipieListFilters";

const ShowRecipies = () => {
  const recipiesfilterd = getVisibleRecipies(
    useSelector(state => state.recipies),
    useSelector(state => state.filters)
  );

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
