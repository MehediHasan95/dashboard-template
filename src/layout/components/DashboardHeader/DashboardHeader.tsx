import {
  Badge,
  Button,
  Flex,
  Layout,
  List,
  Popover,
  Space,
  Typography,
} from "antd";
import React from "react";
import Iconify from "../../../common/IconifyConfig/IconifyConfig";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardHeader: React.FC<Props> = ({ setOpen }) => {
  return (
    <>
      <Layout.Header id="dashboard-header">
        <Flex gap={8} align="center" justify="center">
          <Button
            onClick={() => setOpen(true)}
            type="default"
            icon={<Iconify name="pepicons-pop:menu" />}
            id="dashboard-header-icon"
          />
          <Typography.Text strong>Good Morning, Jamal!</Typography.Text>
        </Flex>
        <Flex align="center" justify="center" gap={15}>
          <Badge count={17}>
            <Popover
              content={
                <List
                  itemLayout="vertical"
                  renderItem={() => <List.Item></List.Item>}
                />
              }
              trigger="click"
              placement="bottomRight"
            >
              <Button
                type="default"
                shape="circle"
                icon={<Iconify name="ant-design:bell-outlined" />}
              />
            </Popover>
          </Badge>

          <Button
            type="default"
            shape="circle"
            icon={<Iconify name="ph:moon" />}
          />

          <Popover
            content={
              <Space direction="vertical">
                <Button block type="default" icon={<Iconify name="ph:user" />}>
                  Profile
                </Button>
                <Button
                  block
                  type="default"
                  danger
                  icon={<Iconify name="hugeicons:logout-05" />}
                >
                  Logout
                </Button>
              </Space>
            }
            trigger="click"
            placement="bottomRight"
          >
            <Button
              type="default"
              shape="circle"
              icon={<Iconify name="ph:user" />}
            />
          </Popover>
        </Flex>
      </Layout.Header>
    </>
  );
};

export default DashboardHeader;
