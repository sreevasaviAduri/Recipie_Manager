import React from "react";
import { Descriptions, Button } from "antd";
import "../styles.css";
import { useDispatch } from "react-redux";
import { deleteRecipie } from "../actions/recipies";

const Recipie = props => {
  const dispatch = useDispatch();
  const handleEdit = () => {};
  return (
    <div style={{ marginTop: 10 }}>
      <Descriptions
        bordered
        title={props.recipie.title.toUpperCase()}
        border
        size={"default"}
      >
        <Descriptions.Item label="Description">
          {props.recipie.description}
        </Descriptions.Item>

        <Descriptions.Item label="Ingredients">
          {props.recipie.ingredients}
        </Descriptions.Item>
        <Descriptions.Item label="CookTime">
          {props.recipie.cooktime}
        </Descriptions.Item>

        <Descriptions.Item label="Directions">
          {props.recipie.directions}
        </Descriptions.Item>
      </Descriptions>
      <Button type="primary" onClick={handleEdit}>
        Edit
      </Button>
      <Button
        style={{ marginLeft: 10, marginTop: 10 }}
        type="primary"
        onClick={() => {
          dispatch(deleteRecipie({ id: props.recipie.id }));
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Recipie;