Here is an example of how you can style your login and register forms using basic CSS:

```css
/* App.css */

body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin: 20px 0;
  color: #343a40;
}

.App {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.container {
  padding: 20px;
}

.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container h1 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #ced4da;
}

.form-check-label {
  margin-left: 10px;
}

.button-container {
  text-align: center;
  margin-top: 20px;
}

button {
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

And here is the modified `App.js` with the updated class names to reflect the CSS changes:

```jsx
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { useState } from 'react';

function Grid() {
  return (
    <Container>
      <Row className='border border-1'>
        <Col xs={6} md={4} className='border border-1'>
          Header Logo
        </Col>
        <Col xs={12} md={8} className='border border-1'>
          Header Banner
        </Col>
        <Col className='border border-1'>
          Header Bar
        </Col>
      </Row>
      <br />
      <Row className='border border-1'>
        <Col className='border border-1'>
          Left Blocks
        </Col>
        <Col className='border border-1'>
          <Row className='border border-1'>
            <div className='text-center'>
              Center-Center Blocks
            </div>
          </Row>
          <Row className='border border-1'>
            <Col className='border border-1'>Center-Left Blocks</Col>
            <Col className='border border-1'>Center-Right Blocks</Col>
          </Row>
          <Row className='border border-1'>
            <div className='text-center'>
              Module Contents
            </div>
          </Row>
        </Col>
        <Col className='border border-1'>
          Right Blocks
        </Col>
      </Row>
      <br />
      <Row className='border border-1'>
        <Col className='border border-1'>
          Footer Bar
        </Col>
      </Row>
    </Container>
  );
}

function Flex() {
  return (
    <>
      <Container className='border border-1'>
        <div fluid className='d-flex border border-1'>
          <div className=' border border-1 w-25'>Header Logo</div>
          <div className='border border-1 w-75'>Header Banner</div>
        </div>
        <div className=' border border-1'>Header Bar</div>
      </Container>
      <br />
      <Container className='d-flex border border-1'>
        <Container className='text-center border border-1'>
          <div>Left Blocks</div>
        </Container>
        <Container className='border border-1'>
          <div className='border border-1'>Center-Center Blocks</div>
          <Container className='d-flex border border-1'>
            <Container className=' border border-1'>Center Left Blocks</Container>
            <Container className='border border-1'>Center Right Blocks</Container>
          </Container>
          <div className=' border border-1'>Module Contents</div>
        </Container>
        <Container className='text-center border border-1'>
          <div>Right Blocks</div>
        </Container>
      </Container>
      <br />
      <Container className='border border-1'>
        <Container fluid className='border border-1'>
          Footer Bar
        </Container>
      </Container>
    </>
  );
}

function Login() {
  return (
    <Container className='form-container'>
      <Form>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Username</Form.Label>
          <Form.Control type='username' placeholder='Enter username' className='form-control' />
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' className='form-control' />
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Check type='switch' id='custom-switch' label='Remember me' />
        </Form.Group>
        <div className='button-container'>
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </div>
      </Form>
    </Container>
  );
}

function Register() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);

  return (
    <Container className='form-container'>
      <Form>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Username</Form.Label>
          <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control placeholder='Username' className='form-control' />
          </InputGroup>
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Full Name</Form.Label>
          <InputGroup>
            <InputGroup.Text>Full Name</InputGroup.Text>
            <Form.Control placeholder='Enter Your Full Name' className='form-control' />
          </InputGroup>
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Email Address</Form.Label>
          <InputGroup>
            <InputGroup.Text>Email Address</InputGroup.Text>
            <Form.Control placeholder='Enter Your Email Address' className='form-control' />
          </InputGroup>
        </Form.Group>
        <Form.Group className='form-group'>
          <Form.Label className='form-label'>Password</Form.Label>
          <InputGroup>
            <InputGroup.Text>Password</InputGroup.Text>
            <Form.Control type={showPass ? 'text' : 'password'} placeholder='Password' className='form-control' />
            <Form.Check type='switch' id='custom-switch' label='Show Password' checked={showPass} onChange={togglePass} />
          </InputGroup>
        </Form.Group>
        <div className='button-container'>
          <Button variant='primary' type='submit'>
            Register
          </Button>
        </div>
      </Form>
    </Container>
  );
}

function App() {
  return (
    <div className='App'>
      <h1>React Bootstrap with Grid</h1>
      <Grid />
      <h1>React Bootstrap with Flexbox</h1>
      <Flex />
      <h1>Login</h1>
      <Login />
      <br />
      <Container className='form-container'>
        <h1>Register</h1>
        <Register />
      </Container>
    </div>
  );
}

export default App;
```

This CSS will provide a clean and modern look to the login and register forms, making them visually appealing and user-friendly.