import React, { useState, useEffect } from "react";
import Avatar from "./component/Avatar";
import { getUser, removeUserSession } from "./Utils/Common";
import Heading from "./component/Heading";
import { Container} from "react-bootstrap";
const BooksList = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <Container fliud>
      <Heading title="books list"></Heading>
      <Avatar user={getUser()} logout={handleLogout}></Avatar>
    </Container>
  );
};

export default BooksList;
