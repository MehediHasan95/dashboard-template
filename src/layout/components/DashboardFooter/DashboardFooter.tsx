import { Layout, Typography } from "antd";
import React from "react";

const DashboardFooter: React.FC = () => {
  return (
    <Layout.Footer style={{ padding: 5 }}>
      <Typography.Text style={{ textAlign: "center", display: "block" }}>
        © 2023 - 2024. All Rights Reserved by Restaurant360 and Design &
        Developed by M360ICT
      </Typography.Text>
    </Layout.Footer>
  );
};

export default DashboardFooter;
