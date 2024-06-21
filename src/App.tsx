import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ConfigProvider, theme } from "antd";
import Notification from "./common/Notification/Notification";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          algorithm: theme.compactAlgorithm,
          token: {
            fontFamily: "Roboto, sans-serif",
            colorPrimary: "#7026ED",
          },
        }}
      >
        <RouterProvider router={router} />
        <Notification />
      </ConfigProvider>
    </React.Fragment>
  );
};

export default App;
