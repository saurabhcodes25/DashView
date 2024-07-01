import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <br></br>



      {/*middle*/}

      <Container  className='d-flex border border-1 '>

        <Container className='text-center border border-1 '>
          <div >Left Blocks</div>
        </Container>
        

        <Container  className='border border-1'>
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
      <br></br>



      {/* lower one */}

      <Container  className='border border-1'>
        <Container fluid className='border border-1'>
          Footer Bar
        </Container>
      </Container>

    </>


  )
}
function App() {
  return (
    <div className="App">
      <h1>React Bootstrap with Grid</h1>
      <Grid />
      <h1>React Bootstrap with Flexbox</h1>
      <Flex />
    </div>
  );
}
export default App;
