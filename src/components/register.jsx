import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

function Register() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container className="form-container border border-1 border-danger p-3">
      <Form.Label className="fw-bold fw-lg p-3">Register</Form.Label>

      <InputGroup className="form-group p-1">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>
      <InputGroup className="form-group p-1">
        <InputGroup.Text>Full Name</InputGroup.Text>
        <Form.Control placeholder="Enter Your Full Name" />
      </InputGroup>
      <InputGroup className="form-group p-1">
        <InputGroup.Text>Email Address</InputGroup.Text>
        <Form.Control placeholder="Enter Your Email Address" />
      </InputGroup>
      <InputGroup className="form-group p-1">
        <InputGroup.Text> Choose a Password</InputGroup.Text>
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
      </InputGroup>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Container>
  );
}

export default Register;
