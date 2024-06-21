import React, { useState } from "react";
import Container from "../../../common/Container/Container";
import { Modal, Table } from "../../../common/CommonAnt";
import { Select } from "antd";
import { useGetIngredientQuery } from "../api/ingredientEndpoint";
import CreateIngredient from "../components/CreateIngredient";

export type FilterTypes = {
  limit: number;
  skip: number;
};

const Ingredient: React.FC = () => {
  const [filter, setFilter] = useState<FilterTypes>({
    limit: 20,
    skip: 0,
  });

  const { data, isLoading } = useGetIngredientQuery(filter);
  const [search, setSearch] = useState<string>("");

  return (
    <React.Fragment>
      <Container
        headerTitle="List of Ingredient"
        buttonLabel="Create Ingredient"
        setSearch={setSearch}
        additionalContent={
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        }
        content={
          <Table
            loading={isLoading}
            filter={filter}
            setFilter={setFilter}
            total={data?.total}
            dataSource={data?.data || []}
            columns={[
              {
                title: "ID",
                dataIndex: "ingredient_id",
              },
              {
                title: "Ingredient Name",
                dataIndex: "ingredient_name",
              },
              {
                title: "Ingredient Code",
                dataIndex: "ingredient_code",
              },
              {
                title: "Unit",
                dataIndex: "ingredient_measure_status",
              },
              {
                title: "Unit",
                dataIndex: "ingredient_created_at",
              },
            ]}
          />
        }
      />
      <Modal title="Create Ingredient" children={<CreateIngredient />} />
    </React.Fragment>
  );
};

export default Ingredient;
