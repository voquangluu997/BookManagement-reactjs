import React from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import { Heading, Avatar } from "./component";
import { Container } from "react-bootstrap";

const Author = (props) => {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <Container fliud>
      <Heading title="authors"></Heading>
      <Avatar user={getUser()} logout={handleLogout}></Avatar>
    </Container>
  );
};

export default Author;
