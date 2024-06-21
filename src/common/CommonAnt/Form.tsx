import React, { useEffect } from "react";
import { Form as AntForm, Button, FormProps, FormItemProps } from "antd";
import { Store } from "antd/es/form/interface";
import Iconify from "../IconifyConfig/IconifyConfig";

interface Props<T> extends FormProps<T> {
  buttonLabel?: string;
  isLoading: boolean;
  isSuccess: boolean;
  onFinish: (values: T) => void;
  children: React.ReactNode;
}

interface ItemProps<T> extends Omit<FormItemProps, "name" | "children"> {
  name: keyof T;
  label?: string;
  rules?: FormItemProps["rules"];
  children: React.ReactNode;
}

const Form = <T extends Store>({
  buttonLabel = "Submit",
  isLoading,
  isSuccess,
  onFinish,
  children,
  ...rest
}: Props<T>) => {
  const [form] = AntForm.useForm<T>();

  const handleSubmit: FormProps<T>["onFinish"] = (values) => {
    onFinish(values);
  };

  useEffect(() => {
    if (isSuccess) {
      form.resetFields();
    }
  }, [form, isSuccess]);

  return (
    <AntForm form={form} layout="vertical" onFinish={handleSubmit} {...rest}>
      {children}
      <AntForm.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          icon={<Iconify name="iconamoon:send-fill" />}
        >
          {buttonLabel}
        </Button>
      </AntForm.Item>
    </AntForm>
  );
};

const FormItem = <T extends Store>({
  name,
  label,
  rules,
  children,
  ...rest
}: ItemProps<T>) => {
  return (
    <AntForm.Item name={name as string} label={label} rules={rules} {...rest}>
      {children}
    </AntForm.Item>
  );
};

Form.Item = FormItem;

export default Form;
