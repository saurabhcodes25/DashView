import { Container, Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import img from "../assets/mcl.jpeg";

function Register() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container className=" form-container border border-1" style={{width:"30%"}}>
      <div className="text-center">
        <Image src={img} height="100px" />
        <br></br>
        <Form.Label className="fs-3 fw-bold">Register</Form.Label>
      </div>

      <Form className="p-3">
        <Form.Group className="  pb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control placeholder="Username" />
        </Form.Group>
        <Form.Group className="  pb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="  pb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control placeholder="Email Address" />
        </Form.Group>
        <Form.Group className=" pb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type={showPass ? "text" : "password"}
            placeholder="Password"
          />
          <Form.Check
            className=""
            type="switch"
            id="custom-switch"
            label=""
            checked={showPass}
            onChange={togglePass}
          />
        </Form.Group>
        <Form.Group className="mx-auto  pb-1 ">
         <Button variant="primary" type="submit" className="w-100">
          Register
          </Button>
          </Form.Group>
      </Form>
    </Container>
  );
}

export default Register;
