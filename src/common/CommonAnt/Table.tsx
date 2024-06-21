import { Table as AntTable, TableProps, Typography } from "antd";

interface Props<T> extends TableProps<T> {
  filter: { limit: number; skip: number };
  setFilter: React.Dispatch<
    React.SetStateAction<{ limit: number; skip: number }>
  >;
  total: number | undefined;
}

const Table = <T extends object>({
  filter,
  setFilter,
  total,
  ...restProps
}: Props<T>): JSX.Element => {
  return (
    <AntTable
      {...restProps}
      scroll={{ x: true }}
      size="middle"
      pagination={{
        total: total,
        showSizeChanger: true,
        showTotal: (total) => (
          <Typography.Text strong>
            Total {filter.limit} of {total}
          </Typography.Text>
        ),
        current: Math.floor(filter.skip / filter.limit) + 1,
        pageSize: filter.limit,
        onChange: (page, pageSize) => {
          setFilter({ limit: pageSize, skip: (page - 1) * pageSize });
        },
      }}
    />
  );
};

export default Table;
