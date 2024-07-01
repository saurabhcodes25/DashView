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
    Table,
  } from "react-bootstrap";
  import pfp from '../assets/pfp.jpeg'
  function Lemon() {
    return (
      <>
        <Container fluid className="border bg-dark2" style={{ height: "100vh" }}>
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
  
              <div
                className="d-flex align-items-center pe-2 "
                style={{ fontSize: "15px" }}
              >
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
  
            {/* card1 */}
            <Container fluid className="">
              <div
                className="d-flex text-white  justify-content-between "
                style={{ fontSize: 14 }}
              >
                <Card
                  className="mt-3 m-2  pt-2 p-1 bg-cards text-white border-dark "
                  style={{ width: "500px" }}
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <Card.Header className="border-0">
                      Loyality Status
                      <i
                        class="p-1 text-grey bi bi-exclamation-circle"
                        style={{ fontSize: "10px" }}
                      ></i>
                    </Card.Header>
                    <Card.Header className="border-0">
                      <span className="text-grey p-1">Restarting:</span>
                      5:14:54:54
                    </Card.Header>
                  </div>
                  <div className="d-flex justify-content-between align-items-center m-1 p-2">
                    <div>
                      <span className="text-grey">Monthly Spent</span>
                      <div style={{ fontSize: 18 }}>
                        $233.40
                        <span
                          className="ms-2 p-1 text-grey border-dark bg-grey2 rounded-2"
                          style={{ fontSize: 12 }}
                        >
                          Silver
                        </span>
                      </div>
                    </div>
                    <div className="ps-2">
                      <span className="text-grey">Gold</span>
                      <i
                        class="p-1 text-grey bi bi-exclamation-circle"
                        style={{ fontSize: "10px" }}
                      ></i>
                      <div style={{ fontSize: 18 }}>$275.00</div>
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
                  <div className="border-0 mt-2" style={{ fontSize: 14 }}>
                    <InputGroup className="bg-cards p-2 mt-2 text-white">
                      <Form.Control
                        disabled
                        className="text-white bg-cards border-gray2"
                        placeholder="promocode25"
                      />
                      <InputGroup.Text className="bg-red2 border-dark text-white">
                        Copy
                      </InputGroup.Text>
                    </InputGroup>
                  </div>
                </Card>
  
                {/* card2 */}
  
                <Card
                  className="mt-3 m-2 p-1 bg-cards text-white border-dark"
                  style={{ width: "800px" }}
                >
                  <div className="d-flex  align-items-center justify-content-between">
                    <Card.Header className="border-0">Announcements</Card.Header>
                  </div>
  
                  <div className="bg-cards border-bottom border-dark m-2">
                    <Button
                      className="ms-2 me-2 ps-2  pe-2 border-0 bg-cards border-bottom border-grey  rounded-0"
                      style={{ fontSize: 14 }}
                      variant="secondary"
                    >
                      General
                      <Badge className="ms-2 text-grey  bg-grey2 rounded-1" bg="">
                        3
                      </Badge>
                    </Button>
                    <Button
                      className="border-0"
                      variant="outline-secondary"
                      style={{ fontSize: 14 }}
                    >
                      Status
                    </Button>
                    <Button
                      className="border-0"
                      variant="outline-secondary"
                      style={{ fontSize: 14 }}
                    >
                      Promotions
                    </Button>
                  </div>
  
                  <div className="d-flex m-2 ps-2 pe-2 justify-content-between">
                    <div className="d-flex ">
                      <Image
                        src={pfp}
                        height="40px"
                        className="center"
                      />
                      <div className="ms-2 " style={{ fontSize: 14 }}>
                        <div>TheDuke</div>
                        <div className="text-grey">On General</div>
                      </div>
                    </div>
                    <div className="text-grey">14h ago</div>
                  </div>
  
                  <div
                    className="p-2 border-bottom border-dark m-2 text-grey"
                    style={{ fontSize: 14 }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                    enim ea nihil perspiciatis repellat. Impedit neque vero
                    incidunt ipsam expedita deserunt optio assumenda vitae
                    quisquam nobis, quos dolor cumque nemo?
                  </div>
                </Card>
  
                {/* card3 */}
                <Card
                  className="mt-3 m-2 p-2 bg-cards text-white border-dark"
                  style={{ width: "300px" }}
                >
                  <Card.Header className="border-0" style={{ fontSize: 14 }}>
                    Help Center
                  </Card.Header>
  
                  <ListGroup
                    className="m-2 p-1 bg-cards text-white border-dark mt-2"
                    style={{ fontSize: 16 }}
                  >
                    <ListGroup.Item className="bg-grey2 text-grey border-0 ml-2 mr-2 mb-2 rounded-2  w-100">
                      <i class="bi bi-file-earmark-text pe-2"></i>
                      Insert Vat
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-grey2 text-grey border-0 ml-2 mr-2 mb-2 rounded-2 w-100">
                      <i class="bi bi-question-circle pe-2 "></i>
                      FAQ
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-grey2 text-grey border-0 ml-2 mr-2 mb-2 rounded-2  w-100">
                      <i class="bi bi-gear pe-2"></i>
                      Troubleshooting
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-grey2 text-grey border-0 ml-2 mr-2 mb-2 rounded-2  w-100">
                      <i class="bi bi-people pe-2"></i>
                      Talk To support
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
  
              <Table
                className="  table-info border-dark "
                style={{
                  
                  borderRadius: "10px",
                  overflow: "hidden",
                  WebkitTextFillColor: "white",
                  fontSize: 14,
                }}
              >
                <thead className=" text-white fw-light">
                  <tr className="">
                    <th className="">ID</th>
                    <th>Product</th>
                    <th>
                      Date
                      <i
                        class="bi bi-arrow-up p-2 "
                        style={{ WebkitTextFillColor: "grey", fontSize: "10px" }}
                      ></i>
                    </th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>
                      Total
                      <i
                        class="bi bi-arrow-up p-2"
                        style={{ WebkitTextFillColor: "grey", fontSize: "10px" }}
                      ></i>
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody
                  className="text-grey"
                  style={{ WebkitTextFillColor: "#7E7D7C" }}
                >
                  <tr className="border-bottom border-dark">
                    <td>
                      <i class="bi bi-copy pe-2" style={{ fontSize: "10px" }}></i>
                      #AP1934
                    </td>
                    <td>Static Proxies</td>
                    <td>26 April 2016</td>
                    <td>4GB</td>
                    <td>
                      <Button
                        className=" border-0 text-red2"
                        style={{
                          backgroundColor: "#2C2C21",
                          WebkitTextFillColor: "#F5E65A",
                          fontSize: 14,
                        }}
                      >
                        <i
                          class="bi bi-circle-fill me-2"
                          style={{ fontSize: "8px" }}
                        ></i>
                        Waiting
                      </Button>
                    </td>
                    <td>$33.00</td>
                    <td>
                      <Button className="bg-cards border-gray3 text-grey button-bg">
                        Download Invoice
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-bottom border-dark">
                    <td>
                      <i class="bi bi-copy pe-2" style={{ fontSize: "10px" }}></i>
                      #AP1934
                    </td>
                    <td>Static Proxies</td>
                    <td>26 April 2016</td>
                    <td>4GB</td>
                    <td>
                      <Button
                        className=" border-0 "
                        style={{
                          backgroundColor: "#2C2C21",
                          WebkitTextFillColor: "#F5E65A",
                          fontSize: 14,
                        }}
                      >
                        <i
                          class="bi bi-circle-fill me-2"
                          style={{ fontSize: "8px" }}
                        ></i>
                        Waiting
                      </Button>
                    </td>
                    <td>$33.00</td>
                    <td>
                      <Button className="bg-cards border-gray3 text-grey button-bg">
                        Download Invoice
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-bottom border-dark">
                    <td>
                      <i class="bi bi-copy pe-2" style={{ fontSize: "10px" }}></i>
                      #AP1934
                    </td>
                    <td>Static Proxies</td>
                    <td>26 April 2016</td>
                    <td>4GB</td>
                    <td>
                      <Button
                        className=" border-0 text-red2"
                        style={{
                          backgroundColor: "#252D21",
                          WebkitTextFillColor: "#B1F55A",
                          fontSize: 14,
                        }}
                      >
                        <i
                          class="bi bi-circle-fill me-2"
                          style={{ fontSize: "8px" }}
                        ></i>
                        Active
                      </Button>
                    </td>
                    <td>$33.00</td>
                    <td>
                      <Button className="bg-cards border-gray3 text-grey button-bg">
                        Download Invoice
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-bottom border-dark">
                    <td>
                      <i class="bi bi-copy pe-2" style={{ fontSize: "10px" }}></i>
                      #AP1934
                    </td>
                    <td>Static Proxies</td>
                    <td>26 April 2016</td>
                    <td>4GB</td>
                    <td>
                      <Button
                        className=" border-0 text-red2"
                        style={{
                          backgroundColor: "#2D1D21",
                          WebkitTextFillColor: "#FA5555",
                          fontSize: 14,
                        }}
                      >
                        <i
                          class="bi bi-circle-fill me-2"
                          style={{ fontSize: "8px" }}
                        ></i>
                        Expired
                      </Button>
                    </td>
                    <td>$33.00</td>
                    <td>
                      <Button className="bg-cards border-gray3 text-grey button-bg">
                        Download Invoice
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-bottom border-dark">
                    <td>
                      <i class="bi bi-copy pe-2" style={{ fontSize: "10px" }}></i>
                      #AP1934
                    </td>
                    <td>Static Proxies</td>
                    <td>26 April 2016</td>
                    <td>4GB</td>
                    <td>
                      <Button
                        className=" border-0"
                        style={{
                          backgroundColor: "#2D1D21",
                          WebkitTextFillColor: "#FA5555",
                          fontSize: 14,
                        }}
                      >
                        <i
                          class="bi bi-circle-fill me-2"
                          style={{ fontSize: "8px" }}
                        ></i>
                        Expired
                      </Button>
                    </td>
                    <td>$33.00</td>
                    <td>
                      <Button className="bg-cards border-gray3 text-grey button-bg">
                        Download Invoice
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
  export default Lemon;
  