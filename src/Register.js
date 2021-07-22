import React, { useState } from "react";
import { setUserSession } from "./Utils/Common";
import axios from "axios";
import { Form, Button, Container, Row } from "react-bootstrap";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    var config = {
      method: "get",
      url: "https://book-management-opentwt.herokuapp.com/profiles/",
    };
    setErr(null);
    setLoading(true);
    axios
      .post("https://book-management-opentwt.herokuapp.com/auth/register", {
        email,
        password,
        firstName,
        lastName,
        avatar,
      })
      .then(async (response) => {
        setLoading(false);
        props.history.push("/login");
      })
      .catch((error) => {
        setLoading(false);
        if (
          error.response &&
          (error.response.status === 401 ||
            (error.response.status === 400) | (error.response.status === 409))
        ) {
          typeof error.response.data.message == "object"
            ? setErr(`Register failed : ${error.response.data.message[0]}`)
            : setErr(`Register failed : ${error.response.data.message}`);
        } else {
          setErr("Something went wrong, Please try again later");
        }
      });
  };
  return (
    <Container fluid>
      <div>
        <h3 className="heading">Đăng ký</h3>
        <div className="heading-underline"></div>
      </div>

      <Container>
        <Row sm={1} md={2} className="justify-content-md-center">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            {err && <p className="mb-3 alert alert-danger">{err}</p>}

            <Button
              variant="outline-dark"
              type="submit"
              disabled={loading}
              onClick={handleRegister}
            >
              {loading ? "Loading..." : "Register"}
            </Button>
            <a href="/login" className="d-flex mt-3 alert-link text-dark">
              {" "}
              Tôi đã đăng ký tài khoản trước đó{" "}
            </a>
          </Form>
        </Row>
      </Container>
    </Container>
  );
};

export default Register;
