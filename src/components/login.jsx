import { Container, Form, Button, Image } from "react-bootstrap";
import img from "../assets/mcl.jpeg";

import { useState } from "react";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container className="w-25 form-container border border-1" style={{width:"30%"}}>
      <div className=" text-center">
        <Image src={img} height="100px" className="center" />
        <br></br>
        <Form.Label className="fs-3 fw-bold">Login</Form.Label>
      </div>
      <Form className="p-3">
        <Form.Group className=" form-group pb-3 ">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username" />
        </Form.Group>

        <Form.Group className=" form-group pb-3 ">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type={showPass ? "text" : "password"}
            placeholder="Password"
          />
          <Form.Check
            className="form-group"
            type="switch"
            id="custom-switch"
            label=""
            checked={showPass}
            onChange={togglePass}
          />
        </Form.Group>
      </Form>
      <Form.Group className="mx-auto pb-3">
        <Button className="w-100 btn btn-info" variant="primary" type="submit" >
          Login
        </Button>

  
      </Form.Group>
    </Container>
  );
}

export default Login;
