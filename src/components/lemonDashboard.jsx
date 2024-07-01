import {
  Container,
  Card,
  Button,
  InputGroup,
  Form,
  ProgressBar,
  Badge,
  Image,
  ListGroup,
} from "react-bootstrap";

function Lemon() {
  return (
    <>
      <Container fluid className="border bg-cards " style={{ height: "100vh" }}>
        <Container
          fluid
          className="border border-dark mt-4 p-0 rounded-4"
          style={{ height: "94vh" }}
        >
          <Container
            fluid
            className="p-0 d-flex align-items-center justify-content-between border-bottom border-dark"
          >
            <h1 className="p-0 h-0 display-6  m-2 mt-0 pb-2 ps-2">
              <span class="text-grey fs-5">Dashboard / </span>
              <span class="fs-5">Home </span>
            </h1>

            <div className="d-flex align-items-center fs-4 pe-2 ">
              <i class="bi bi-bell p-2 text-grey"></i>
              <Button className="bg-grey2 border border-dark">
                <i class="bi bi-database "></i>
                <span className="ps-2">$78,54</span>
              </Button>
              <Button className="ms-2 bg-grey2 border border-dark ">
                <i class="bi bi-gear text-grey"></i>
                <span className="ps-2 text-grey">Manage Billing</span>
              </Button>
            </div>
          </Container>

          <Container fluid className="">
            <div className="d-flex text-white fs-7 p-2 justify-content-between">
              <Card className="pt-2 p-1 bg-cards text-white border-dark mt-2">
                <div className="d-flex  align-items-center justify-content-between">
                  <Card.Header className="border-0">
                    Loyality Status
                    <i class="p-1 text-grey bi bi-exclamation-circle fs-6"></i>
                  </Card.Header>
                  <Card.Header className="border-0"> 
                    <span className="text-grey p-1">Restarting:</span>
                    5:14:54:54
                  </Card.Header>
                </div>
                <div className="d-flex justify-content-between align-items-center m-1 p-2">
                  <div>
                    <span className="text-grey">Monthly Spent</span>
                    <div>
                      $233.40
                      <span className="ms-2 p-1 text-grey border-dark bg-grey2 rounded-2">
                        Silver
                      </span>
                    </div>
                  </div>
                  <div className="ps-2">
                    <span className="text-grey">Gold</span>
                    <div>$275.00</div>
                  </div>
                </div>
                <div className="p-1 m-2 mt-3">
                  {/* progress-bar */}
                  <ProgressBar
                    className="bg-grey2"
                    striped
                    variant="danger"
                    now={70}
                  />
                </div>
                <Card.Footer className="">
                  <InputGroup className="bg-cards mt-3 border-top-0">
                    <Form.Control
                      className="bg-cards text-grey border-dark"
                      type="text"
                      placeholder="promocode25"
                    />
                    <InputGroup.Text className="bg-red2 border-dark text-white">
                      Copy
                    </InputGroup.Text>
                  </InputGroup>
                </Card.Footer>
              </Card>

              {/* card2 */}

              <Card className="ms-2 p-1 bg-cards text-white border-dark mt-2 w-50">
                <div className="d-flex  align-items-center justify-content-between">
                  <Card.Header className="border-0">Announcements</Card.Header>
                </div>

                <div className="bg-cards border-bottom border-dark">
                  <Button
                    className="border-0 bg-cards border-bottom border-grey  rounded-0"
                    variant="secondary"
                  >
                    General
                    <Badge className="ms-2 text-grey  bg-grey2 rounded-1" bg="">
                      3
                    </Badge>
                  </Button>
                  <Button className="border-0" variant="outline-secondary">
                    Status
                  </Button>
                  <Button className="border-0" variant="outline-secondary">
                    Promotions
                  </Button>
                </div>

                <div className="d-flex m-2 p-1 justify-content-between">
                  <Image
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/036b3422-fe68-411c-923a-2a791a08a68b/ddnos04-a87de5fe-2bd7-4ba7-a989-60fced60ad78.png/v1/fill/w_1280,h_1360,q_80,strp/pfp_com_by_cherriow_ddnos04-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2MCIsInBhdGgiOiJcL2ZcLzAzNmIzNDIyLWZlNjgtNDExYy05MjNhLTJhNzkxYTA4YTY4YlwvZGRub3MwNC1hODdkZTVmZS0yYmQ3LTRiYTctYTk4OS02MGZjZWQ2MGFkNzgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jUKoZlvuivn0t9iO6MQhUI5DMFG_iRYm19ZnogUmyIE"
                    height="40px"
                    className="center"
                  />
                  <div className="ms-2 fs-6">
                    TheDuke
                    <div className="text-grey">On General</div>
                  </div>
                  <div className="text-grey">14h ago</div>
                </div>

                <div className="p-2 fs-6 border-bottom border-dark mb-3 text-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem quaerat temporibus alias inventore tenetur qui quis
                  hic sed ipsa doloribus voluptates nisi voluptas, explicabo
                  rerum,
                </div>
              </Card>

              {/* card3 */}
              <Card className="ms-2 p-1 bg-cards text-white border-dark m-2 p-2">
                <Card.Header className="border-0">Help Center</Card.Header>

                <ListGroup className="m-2 p-1 bg-cards text-white border-dark mt-2">
                  <ListGroup.Item className="bg-grey2 text-grey border-0 m-1 rounded-2">
                    <i class="bi bi-file-earmark-text pe-2"></i>
                    Insert Vat
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-grey2 text-grey border-0 m-1 rounded-2">
                    <i class="bi bi-question-circle pe-2 "></i>
                    FAQ
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-grey2 text-grey border-0 m-1 rounded-2">
                    <i class="bi bi-gear pe-2"></i>
                    Troubleshooting
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-grey2 text-grey border-0 m-1 rounded-2">
                    <i class="bi bi-people pe-2"></i>
                    Talk To support
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}
export default Lemon;
