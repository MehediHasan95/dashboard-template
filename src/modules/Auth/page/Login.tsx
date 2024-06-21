import { Input, Typography } from "antd";
import React, { useState } from "react";
import { ErrorType, LoginTypes } from "../types/authTypes";
import "../styles/Login.css";
import { login_image } from "../../../utilities/images";
import Iconify from "../../../common/IconifyConfig/IconifyConfig";
import { Form } from "../../../common/CommonAnt";
import { useLoginMutation } from "../api/loginEndpoint";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../app/features/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { TOKEN_NAME } from "../../../utilities/baseQuery";

const Login: React.FC = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [errMessage, setErrMessage] = useState<string>("");

  const from = location?.state?.from?.pathname || "/";

  const onFinish = async (values: LoginTypes) => {
    try {
      const response = await login(values).unwrap();
      if (response.success) {
        const { success, token } = response;
        dispatch(loggedIn({ success, token }));
        localStorage.setItem(TOKEN_NAME, JSON.stringify({ success, token }));
        navigate(from);
      }
    } catch (error) {
      const { data, status } = error as ErrorType;
      if (status === "FETCH_ERROR") {
        setErrMessage("We're sorry, our system is currently unavailable.");
      } else {
        setErrMessage(data.message);
      }
    }
  };

  const handleOnFocus = (): void => {
    setErrMessage("");
  };

  return (
    <React.Fragment>
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-fields">
            <div>
              <Typography.Text
                style={{
                  display: "block",
                  color: "#7026ED",
                }}
              >
                Welcome back!
              </Typography.Text>
              <Typography.Text
                strong
                style={{
                  display: "block",
                  fontSize: "2.5rem",
                  fontFamily: "DM Serif Display, serif",
                }}
              >
                Restaurant
              </Typography.Text>
              <Typography.Text style={{ display: "block" }} type="secondary">
                Please login to your account.
              </Typography.Text>
              <br />
              <br />
              <Form
                onFinish={onFinish}
                buttonLabel="Login"
                isLoading={isLoading}
                isSuccess
              >
                <Form.Item<LoginTypes>
                  name="email"
                  rules={[{ required: true, message: "Email ID is required!" }]}
                >
                  <Input
                    onFocus={handleOnFocus}
                    prefix={<Iconify name="ph:user" />}
                    placeholder="Email ID"
                  />
                </Form.Item>

                <Form.Item<LoginTypes>
                  name="password"
                  rules={[{ required: true, message: "Password is required!" }]}
                >
                  <Input.Password
                    onFocus={handleOnFocus}
                    prefix={<Iconify name="ant-design:lock-outlined" />}
                    placeholder="Password"
                  />
                </Form.Item>
              </Form>
              <Typography.Text type="danger">{errMessage}</Typography.Text>
            </div>
          </div>
          <div className="login-form-image">
            <img src={login_image} alt="login image" className="login-image" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
