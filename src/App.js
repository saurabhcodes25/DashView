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



      <br></br>
      <Row className='border border-1'>
        <Col className='border border-1'>
          Left Blocks
        </Col>


        <Col className='border border-1'>
          <Row className='border border-1 '>
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




      <br></br>
      <Row className='border border-1'>
        <Col className='border border-1'>
          Footer Bar
        </Col>

      </Row>


    </Container>


  )
}


function Flex() {
  return (
    <>

      {/* upper */}

      <Container className='border border-1'>
        <div fluid className='d-flex border border-1'>
          <div className=' border border-1 w-25' >Header Logo</div>
          <div className='border border-1 w-75'>Header Banner</div>
        </div>
        <div className=' border border-1'>Header Bar</div>
      </Container>


      <br></br>



      {/*middle*/}

      <Container className='d-flex border border-1 '>

        <Container className='text-center border border-1 '>
          <div >Left Blocks</div>
        </Container>


        <Container className='border border-1'>
          <div className='border border-1'>Center-Center Blocks</div>

          <Container className='d-flex border border-1'>
            <Container className=' border border-1 ' >Center Left Blocks</Container>
            <Container className='border border-1'>Center Right Blocks</Container>
          </Container>
          <div className=' border border-1'>Module Contents</div>
        </Container>



        <Container className='text-center border border-1'>
          <div>Right Blocks</div>
        </Container>


      </Container>


      <br></br>



      {/* lower one */}

      <Container className='border border-1'>
        <Container fluid className='border border-1'>
          Footer Bar
        </Container>
      </Container>

    </>


  )
}

function Login() {
  return (
    <Container className='form-container border border-1'>
      <Form>
        <Form.Group className='form-group'>
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder='Enter username' />
        </Form.Group>

        <Form.Group className='form-group'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Container>
          <Button className='button-container' variant='primary' type='submit'>
            Login
          </Button>
          <Form.Group>

            <Form.Check
              type="switch"
              id="custom-switch"
              label="Remember me"
            />
          </Form.Group >
        </Container>
      </Form>
    </Container>
  )
}

function Register() {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass(!showPass);
  return (
    <Container className='form-container border border-1'>

      <InputGroup className='form-group'>
        <InputGroup.Text >@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
        />
      </InputGroup>
      <InputGroup className='form-group'>
        <InputGroup.Text>Full Name</InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Full Name"
        />
      </InputGroup>
      <InputGroup className='form-group'>
        <InputGroup.Text>Email Address</InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Email Address"
        />
      </InputGroup>
      <InputGroup className='form-group'>
        <InputGroup.Text> Choose a Password</InputGroup.Text>
        <Form.Control type={showPass ? "text" : "password"} placeholder="Password" />
        <Form.Check className='form-group'
          type="switch"
          id="custom-switch"
          label="Show Password"
          checked={showPass}
          onChange={togglePass}
        />
      </InputGroup>
      <Button variant='primary' type='submit'>
        Register
      </Button>
    </Container>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <h1>React Bootstrap with Grid</h1>
//       <Grid />
//       <h1>React Bootstrap with Flexbox</h1>
//       <Flex />
//       <h1>Login and Register</h1>
//       <Container>
//         <Row>
//           <Col xs={12} md={6}>
//             <Login />
//           </Col>
//           <Col xs={12} md={6}>
//             <Register />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <h1>React Bootstrap with Grid</h1>
      <Grid />
      <h1>React Bootstrap with Flexbox</h1>
      <Flex /><br></br><br></br>
      <h1>Login</h1>
      <Login /><br></br>
      <h1>Register</h1>
      <Register /><br></br>
    </div>
  );
}
export default App;
