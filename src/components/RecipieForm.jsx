import React from "react";
import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 12 }
};

const RecipieForm = props => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState();
  const [ingred, setIngred] = React.useState();
  const [directions, setDirections] = React.useState();
  const [cookTime, setCookTime] = React.useState();

  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields(err => {
      if (!err) {
        props.onSubmit({
          title: title,
          description: desc,
          ingredients: ingred,
          directions: directions,
          cooktime: cookTime
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item {...formItemLayout} label="Title">
        {getFieldDecorator("titles", {
          rules: [
            { required: true, message: "Please input your Recipie Title!" }
          ]
        })(
          <Input
            placeholder="Please input Recipie Title"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        )}
      </Form.Item>
      <Form.Item {...formItemLayout} label="Description">
        {getFieldDecorator("description", {
          rules: [
            {
              required: false,
              message: "Please input your Recipie Description!"
            }
          ]
        })(
          <Input
            placeholder="Please input Description"
            onChange={e => setDesc(e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item {...formItemLayout} label="Ingredients">
        {getFieldDecorator("ingredients", {
          rules: [
            {
              required: true,
              message: "Please input your Recipie Ingredients!"
            }
          ]
        })(
          <Input
            placeholder="Please input Ingredients"
            onChange={e => setIngred(e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item {...formItemLayout} label="Directions">
        {getFieldDecorator("directions", {
          rules: [
            {
              required: false,
              message: "Please input your Recipie Directions!"
            }
          ]
        })(
          <Input
            placeholder="Please input Directions"
            onChange={e => setDirections(e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item {...formItemLayout} label="CookTime">
        {getFieldDecorator("cooktime", {
          rules: [
            {
              required: true,
              message: "Please input your Recipie cooking Time!"
            }
          ]
        })(
          <Input
            placeholder="Please input CookTime"
            onChange={e => setCookTime(e.target.value)}
          />
        )}
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
const RecipieFormWrap = Form.create({ name: "coordinated" })(RecipieForm);
export default RecipieFormWrap;
