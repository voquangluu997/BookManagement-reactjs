import React, { useState, useEffect } from "react";
import { setUserSession } from "./Utils/Common";
import axios from "axios";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import { getToken } from "./Utils/Common";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const [authMess, setAuthMess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAuthMess(null);
    props.history.location.state
      ? setAuthMess(props.history.location.state.authMess)
      : setAuthMess(null);
  }, []);

  const handleLogin = () => {
    var config = {
      method: "get",
      url: "https://book-management-opentwt.herokuapp.com/profiles/",
    };
    setErr(null);
    setLoading(true);
    axios
      .post("https://book-management-opentwt.herokuapp.com/auth/login", {
        email,
        password,
      })
      .then(async (response) => {
        setLoading(false);
        let user = await axios.get(
          "https://book-management-opentwt.herokuapp.com/profiles",
          {
            headers: {
              Authorization: `Bearer ${response.data.accessToken}`,
            },
          }
        );
        setUserSession(response.data.accessToken, user.data);
        props.history.push("/bookslist");
      })
      .catch((error) => {
        setLoading(false);
        if (error.response &&(error.response.status === 401 || error.response.status === 400)) {
          typeof error.response.data.message == "object"
            ? setErr(`Login failed : ${error.response.data.message[0]}`)
            : setErr(`Login failed : ${error.response.data.message}`);
        } else {
          setErr("Something went wrong, Please try again later");
        }
      });
  };
  return (
    <Container fluid>
      <div>
        <h3 className="heading">Đăng nhập</h3>
        <div className="heading-underline"></div>
      </div>

      <Container>
        <Row sm={1} md={2} className="justify-content-md-center">
          <Form>
            {authMess && <p className="mb-3 alert alert-warning">{authMess}</p>}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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

            {err && <p className="mb-3 alert alert-danger">{err}</p>}

            <Button
              variant="outline-dark"
              type="submit"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
            <a href="/register" className="d-flex mt-3 alert-link text-dark">
              {" "}
              Đăng ký nếu chưa có tài khoản
            </a>
          </Form>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
