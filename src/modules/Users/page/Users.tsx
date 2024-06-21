import React from "react";
import Container from "../../../common/Container/Container";
import { Modal } from "../../../common/CommonAnt";
import CreateUser from "../components/CreateUser";

const Users: React.FC = () => {
  return (
    <React.Fragment>
      <Container
        headerTitle="List of Users"
        content={<></>}
        buttonLabel="Create User"
      />
      <Modal title="Create User" children={<CreateUser />} />
    </React.Fragment>
  );
};

export default Users;
