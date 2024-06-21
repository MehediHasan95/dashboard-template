import React from "react";
import { Drawer } from "antd";
import MenuData from "./MenuData";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarDrawer: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      onClose={() => setOpen(false)}
      open={open}
      placement="left"
      footer={null}
      closable={false}
      width={250}
      className="sidebar-drawer"
    >
      <MenuData />
    </Drawer>
  );
};

export default SidebarDrawer;
