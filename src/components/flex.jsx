import { Container } from "react-bootstrap";

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

  export default Flex;