import { Container, Form, Button, Image } from "react-bootstrap";
import img from "../assets/pfp.jpeg";

import { useState } from "react";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container fluid className="border border-dark  bg-dark2" style={{ height: "100vh" }}>
      <Container
        className="mt-5 w-25 form-container bg-cards border rounded-3 border-dark"
        style={{ width: "30%" }}
      >
        <div className=" text-center">
          <Image
            src={img}
            height="100px"
            className="m-2 p-3 centered rounded-5"
          />
          <br></br>
          <Form.Label className="fs-3 fw-bold">Login</Form.Label>
        </div>
        <Form className="p-3">
          <Form.Group className="  pb-3 ">
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="button-bg border-0 text-white"
              placeholder="Username"
            />
          </Form.Group>

          <Form.Group className="  pb-3 ">
            <Form.Label>Password</Form.Label>
            <div className="d-flex">
              <Form.Control
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="button-bg border-0 text-white rounded-end-0"
              />
              <i
                onClick={togglePass}
                class="rounded-start-0 rounded-2  button-bg text-white btn bi bi-eye"
              ></i>
            </div>
          </Form.Group>
        </Form>
        <Form.Group className="pb-3">
          <Button
            className="w-100 border-0"
            type="submit"
            style={{
              backgroundColor: "#EC532D",
            }}
          >
            Login
          </Button>
        </Form.Group>
      </Container>
    </Container>
  );
}

export default Login;
