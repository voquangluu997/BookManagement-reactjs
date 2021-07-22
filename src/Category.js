import React from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import Heading from "./component/Heading";
import { Avatar } from "./component";
import { Container } from "react-bootstrap";
const Category = (props) => {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <Container fliud>
      <Heading title="categories"></Heading>
      <Avatar user={getUser()} logout={handleLogout}></Avatar>
    </Container>
  );
};

export default Category;
