import React from "react";

const EditRecipie = props => {
  console.log("edit recipie ", props);
  return (
    <div>
      <p>edit recipie with id of {props.match.params.id}</p>
    </div>
  );
};

export default EditRecipie;
