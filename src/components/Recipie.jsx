import React from "react";
import { Descriptions, Button } from "antd";
import "../styles.css";
import { useDispatch } from "react-redux";
import { startDeleteRecipie } from "../actions/recipies";
import { Link } from "react-router-dom";

const Recipie = props => {
  const dispatch = useDispatch();

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
      <Button type="primary">
        <Link to={`/edit/${props.recipie.id}`}>Edit</Link>
      </Button>
      <Button
        style={{ marginLeft: 10, marginTop: 10 }}
        type="primary"
        onClick={() => {
          dispatch(startDeleteRecipie({ id: props.recipie.id }));
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Recipie;
