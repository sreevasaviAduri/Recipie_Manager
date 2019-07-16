import React from "react";
import { Input, Col, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setText, setCookTime, setTitle } from "../actions/filters";

const { Option } = Select;

const RecipieListFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const recipies = useSelector(state => state.recipies);

  console.log("filters", filters);

  console.log("recipielist filter ", recipies);

  return (
    <div>
      {/* <Row>
        <Col span={6}>
          <Input
            placeholder="IngredientsFilter"
            value={filters.text}
            onChange={e => dispatch(setText(e.target.value))}
          />
        </Col>
        <Col span={6} style={{ marginLeft: 10 }}>
          <Input
            placeholder="cookTimeFilter"
            value={filters.cooktime}
            onChange={e => dispatch(setCookTime(e.target.value))}
          />
        </Col>
        <Col span={6} style={{ marginLeft: 10 }}>
          <Input
            placeholder="TitleFilter"
            value={filters.title}
            onChange={e => dispatch(setTitle(e.target.value))}
          />
        </Col>
      </Row> */}

      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Title Filter"
        optionFilterProp="children"
        onChange={e => dispatch(setTitle(e))}
        allowClear={true}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {recipies.map(recipie => (
          <Option value={recipie.title}>{recipie.title}</Option>
        ))}
      </Select>
    </div>
  );
};

export default RecipieListFilters;
