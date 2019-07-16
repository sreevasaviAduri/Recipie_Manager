import React from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../actions/filters";

const RecipieListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  return (
    <div>
      <Input
        placeholder="Input Ingredients For Filter"
        value={filters.text}
        onChange={e => dispatch(setText(e.target.value))}
      />
    </div>
  );
};

export default RecipieListFilters;
