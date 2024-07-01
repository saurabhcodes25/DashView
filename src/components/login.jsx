import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container className="form-container border border-1 border-danger p-3">
      <Form.Label className="fw-bold p-3">Login</Form.Label>

      <InputGroup className="form-group p-2">
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control placeholder="Username" />
      </InputGroup>

      <InputGroup className="form-group p-2">
        <InputGroup.Text> Password</InputGroup.Text>
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
        Login
      </Button>
    </Container>
  );
}

export default Login;
