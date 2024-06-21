import React from "react";
import { Form } from "../../../common/CommonAnt";
import { IngredientTypes } from "../types/IngredientTypes";
import { Input } from "antd";
import { useCreateIngredientMutation } from "../api/ingredientEndpoint";

const CreateIngredient: React.FC = React.memo(() => {
  const [create, { isLoading, isSuccess }] = useCreateIngredientMutation();

  const onSubmit = (value: IngredientTypes) => {
    create(value);
  };

  return (
    <React.Fragment>
      <Form onFinish={onSubmit} isLoading={isLoading} isSuccess={isSuccess}>
        <Form.Item<IngredientTypes>
          label="Ingredient Name"
          name="ingredient_name"
          rules={[{ required: true, message: "required!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item<IngredientTypes>
          label="Unit"
          name="ingredient_measure_status"
          rules={[{ required: true, message: "required!" }]}
        >
          <Input placeholder="Unit" />
        </Form.Item>
        <Form.Item<IngredientTypes>
          label="Code"
          name="ingredient_code"
          rules={[{ required: true, message: "required!" }]}
        >
          <Input placeholder="Code" />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
});

export default CreateIngredient;
