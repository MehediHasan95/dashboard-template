import { Divider, Menu, Typography } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Iconify from "../../../common/IconifyConfig/IconifyConfig";

const MenuData: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <div className="dashboard-sidebar-style">
      <div>
        <div className="sidebar-short-profile">
          <div className="sidebar-dp-circle">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="dp"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h3>Super Admin</h3>
          <p>superadmin@def.com</p>
        </div>

        <br />
        <Divider
          orientation="left"
          plain
          style={{ fontSize: "10px", color: "#cccccc" }}
          type="horizontal"
        >
          MAIN MANU
        </Divider>
        <div>
          <Menu
            style={{ backgroundColor: "transparent" }}
            mode="inline"
            theme="dark"
            selectedKeys={[pathname]}
            items={[
              {
                key: "/",
                label: <Link to="/">Dashboard</Link>,
                icon: (
                  <Iconify
                    name="mage:dashboard"
                    style={{
                      marginRight: "8px",
                    }}
                  />
                ),
              },
              {
                key: "/restaurants/",
                label: <Link to="/restaurants/">Restaurants</Link>,
                icon: (
                  <Iconify
                    name="solar:shop-bold"
                    style={{
                      marginRight: "8px",
                    }}
                  />
                ),
              },
              {
                key: "/users/",
                label: <Link to="/users/">Users</Link>,
                icon: (
                  <Iconify
                    name="ph:users"
                    style={{
                      marginRight: "8px",
                    }}
                  />
                ),
              },
              {
                key: "/ingredient/",
                label: <Link to="/ingredient/">Ingredient</Link>,
                icon: (
                  <Iconify
                    name="ph:users"
                    style={{
                      marginRight: "8px",
                    }}
                  />
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className="need-support-style">
        <Iconify
          name="fluent:person-support-20-regular"
          width={40}
          color="white"
        />
        <Typography.Text
          style={{
            color: "white",
            fontSize: "20px",
            display: "block",
            fontFamily: "DM Serif Display, serif",
          }}
        >
          Need Support
        </Typography.Text>
        <Typography.Text
          style={{
            color: "#cccccc",
          }}
        >
          Contact with us
        </Typography.Text>
      </div>
    </div>
  );
};

export default MenuData;
