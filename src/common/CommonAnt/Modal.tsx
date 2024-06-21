import React from "react";
import { Modal as AntModal, Divider, ModalProps, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  ModalInitialStateTypes,
  toggleModal,
} from "../../app/features/modalSlice";
import "./index.css";

interface Props extends ModalProps {
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ title, children, ...rest }) => {
  const { open } = useSelector<RootState, ModalInitialStateTypes>(
    (state) => state.modal
  );

  const dispatch = useDispatch();

  const handleOk = (): void => {
    dispatch(toggleModal());
  };

  const handleCancel = (): void => {
    dispatch(toggleModal());
  };

  return (
    <AntModal
      title={
        <>
          <Typography.Text className="modal-header-title">
            {title}
          </Typography.Text>
          <Divider plain style={{ margin: "10px 0" }} />
        </>
      }
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      children={children}
      footer={null}
      {...rest}
    />
  );
};

export default Modal;
