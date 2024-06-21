import { Layout } from "antd";
import React from "react";
import MenuData from "./MenuData";

const DashboardSidebar: React.FC = () => {
  return (
    <Layout.Sider id="dashboard-sidebar">
      <MenuData />
    </Layout.Sider>
  );
};

export default DashboardSidebar;
