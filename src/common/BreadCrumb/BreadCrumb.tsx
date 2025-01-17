import React from "react";
import { Breadcrumb, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import Iconify from "../IconifyConfig/IconifyConfig";

const capitalize = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

const BreadCrumb: React.FC = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    {
      title: (
        <Link to="/">
          <Space>
            <Iconify name="ant-design:home-outlined" />
            <span>Dashboard</span>
          </Space>
        </Link>
      ),
    },
    ...pathSegments.map((segment, index) => {
      const routePath = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const isLastSegment = index === pathSegments.length - 1;

      return {
        title: isLastSegment ? (
          capitalize(segment)
        ) : (
          <Link to={routePath}>{capitalize(segment)}</Link>
        ),
      };
    }),
  ];

  return <Breadcrumb style={{ margin: "5px 0" }} items={breadcrumbItems} />;
};

export default BreadCrumb;
