import {
  Container,
  Card,
  Button,
  InputGroup,
  Form,
  ProgressBar,
  Image,
  Table,
  Col,
  Row,
  Modal,
} from "react-bootstrap";
import pfp from "../assets/pfp.jpeg";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter md-down"
      centered
    >
      <Modal.Header
        closeButton
        className="bg-cards border-bottom-0 border border-dark "
      >
        <Modal.Title>Topup</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-cards border border-dark ">
        <Card className=" m-3  pt-2 p-1 modal-card text-white border-dark ">
          <div className="d-flex  align-items-center justify-content-between">
            <Card.Header className="border-0">
              Data Left
              <i
                class="p-1 text-grey bi bi-exclamation-circle"
                style={{ fontSize: "10px" }}
              ></i>
            </Card.Header>
          </div>
          <div className="d-flex justify-content-between align-items-center m-1 p-2">
            <div>
              <span className="text-grey">Monthly Spent</span>
              <div style={{ fontSize: 18 }}>
                2.3GB
                <span
                  className="ms-2 p-1 text-grey border-dark bg-grey2 rounded-2"
                  style={{ fontSize: 12 }}
                >
                  18%
                </span>
              </div>
            </div>
          </div>
          <div className="p-1 m-2 mt-3">
            <ProgressBar
              variant="red2"
              now={70}
              style={{ height: 45, backgroundColor: "#16171B" }}
            />
          </div>
        </Card>
        <Card className="modal-card m-3 pt-2 p-1  text-white border-dark ">
          <div className="d-flex justify-content-between align-items-center  m-1 p-2">
            <div>
              <span className="text-grey">Topup Amount</span>
              <div>
                <select
                  className=" modal-card text-white rounded-2 ms-0 m-2"
                  style={{ width: 250 }}
                >
                  <option className="fw-lighter ">8GB</option>
                </select>
              </div>
            </div>
          </div>
        </Card>
        <Card className="m-3 pt-2 p-1 modal-card text-white border-dark ">
          <Card.Header className="border-0">Order Summary</Card.Header>
          <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3">
            <span className="text-grey">Total Price</span>
            <span className="text-white " style={{ fontSize: 18 }}>
              $45
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center  m-1 p-2">
            <div>
              <span className="text-grey">Payment Method</span>
              <div>
                <select
                  className="modal-card text-white rounded-2 ms-0 m-2"
                  style={{ width: 250 }}
                >
                  <option className="fw-lighter ">Stripe</option>
                </select>
              </div>
            </div>
          </div>
          <Button className=" bg-cards border-0 bg-red2 m-2 p-2">
            Purchase
          </Button>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

function HybridProxies() {
  const [modalShow, setModalShow] = useState(false);

  const notify = () => {
    toast("Downloaded Successfully!", {
      className: "popup-background",
      progressClassName: "progress-background",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <>
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      ;
      <ToastContainer />
      <ToastContainer />
      <Container fluid className="border bg-dark2" style={{ height: "100vh" }}>
        <Container
          fluid
          className="border border-dark mt-4 p-0 rounded-4 "
          style={{ height: "95vh" }}
        >
          {/* Dashboard */}
          <Container
            fluid
            className="p-0 d-flex align-items-center justify-content-between border-bottom border-dark "
          >
            <h1 className="p-0 h-0 display-6  m-2 mt-0 pb-2 ps-2">
              <span class="text-grey fs-5">Dashboard / </span>
              <span class="fs-5">Hybrid Proxies </span>
            </h1>

            <div
              className="d-flex align-items-center pe-2 "
              style={{ fontSize: "17px" }}
            >
              <i class="bi bi-bell p-2 text-grey"></i>
              <Button className="bg-grey2 border border-dark">
                <i class="bi bi-database "></i>
                <span className="ps-2">$78,54</span>
              </Button>
              <Button className="ms-2 bg-grey2 border border-dark buttons-ani2 ">
                <i class="bi bi-gear text-grey"></i>
                <span className="ps-2 text-grey">Manage Billing</span>
              </Button>
            </div>
          </Container>

          <div
            className=" overflow-y-scroll  overflow-x-hidden"
            style={{ maxHeight: "90%" }}
          >
            {/* card1 */}
            <Row className="">
              <Col md={3} className=" border-end border-dark ">
                <div className="">
                  <Card
                    className="m-3  pt-2 p-1 bg-cards text-white border-dark "
                    style={{ width: "300px", height: "480px" }}
                  >
                    <Card.Header className="border-0">
                      Purchase Plans
                    </Card.Header>
                    <div className="d-flex justify-content-between align-items-center  m-1 p-2">
                      <div>
                        <span className="text-grey">Location</span>
                        <div>
                          <select
                            className="bg-cards text-white rounded-2 ms-0 m-2"
                            style={{ width: 125 }}
                          >
                            <option className="fw-lighter ">Italy</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <span className="text-grey">Data</span>
                        <div>
                          <select
                            className="bg-cards text-white rounded-2 ms-0 m-2"
                            style={{ width: 125 }}
                          >
                            <option className="fw-lighter">10GB</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center m-1 p-2 border-bottom border-dark">
                      <div>
                        <span className="text-grey">Length</span>
                        <div>
                          <select
                            className="bg-cards text-white  rounded-2 ms-0 m-2"
                            style={{ width: 125 }}
                          >
                            <option className="fw-lighter bg-cards">
                              30Days
                            </option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <span className="text-grey">Quantity</span>
                        <div>
                          <select
                            className="bg-cards text-white rounded-2 ms-0 m-2 "
                            style={{ width: 125 }}
                          >
                            <option className="fw-lighter">255</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  m-1 p-2 ">
                      <div className="d-flex ">
                        <Image src={pfp} height="40px" className="center" />
                        <div className="ms-2 " style={{ fontSize: 14 }}>
                          <div>Hybrid ISPs</div>
                          <div className="text-red2">$2.45/isp</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex  text-grey pb-0 p-2 "
                      style={{ fontSize: 14 }}
                    >
                      <i class="bi bi-check2 me-1 pt-1 "></i>Speed 100ms - 300ms
                    </div>
                    <div
                      className="d-flex  text-grey pb-0 p-2"
                      style={{ fontSize: 14 }}
                    >
                      <i class="bi bi-check2 me-1 pt-1 "></i>14 million
                      Dedicated IPs
                    </div>
                    <div
                      className="d-flex  text-grey pb-0 p-2"
                      style={{ fontSize: 14 }}
                    >
                      <i class="bi bi-check2 me-1 pt-1 "></i>Feature 3
                    </div>
                    <div
                      className="d-flex  text-grey pb-0 p-2"
                      style={{ fontSize: 14 }}
                    >
                      <i class="bi bi-check2 me-1 pt-1 "></i>Feature 4
                    </div>
                    <div
                      className="d-flex  text-grey pb-0 p-2"
                      style={{ fontSize: 14 }}
                    >
                      <i class="bi bi-check2 me-1 pt-1 "></i>Feature 5
                    </div>
                  </Card>
                  <Card
                    className="m-3 pt-2 p-1 bg-cards text-white border-dark "
                    style={{ width: "300px" }}
                  >
                    <Card.Header className="border-0">
                      Order Summary
                    </Card.Header>
                    <div className="d-flex justify-content-between align-items-center border-bottom border-dark p-3">
                      <span className="text-grey">Total Price</span>
                      <span className="text-white " style={{ fontSize: 18 }}>
                        $45
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  m-1 p-2">
                      <div>
                        <span className="text-grey">Payment Method</span>
                        <div>
                          <select
                            className="bg-cards text-white rounded-2 ms-0 m-2"
                            style={{ width: 250 }}
                          >
                            <option className="fw-lighter ">Stripe</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={notify}
                      className=" bg-cards border-0 bg-red2 m-2 p-2"
                    >
                      Purchase
                    </Button>
                  </Card>
                </div>
              </Col>
              <Col md={8}>
                {/* card3 */}
                <Card className="m-3  pt-2 p-1 bg-cards text-white border-dark ">
                  <div
                    className="d-flex align-items-center justify-content-between border-bottom border-dark
                  "
                  >
                    <Card.Header className="">Your Orders</Card.Header>
                    <InputGroup
                      className="p-2 m-2 bg-cards text-grey"
                      style={{ width: 250 }}
                    >
                      <Form.Control
                        className="text-white bg-cards border-end-0 border-dark"
                        placeholder="Search Orders"
                      />
                      <InputGroup.Text className=" buttons-ani bg-cards border-dark text-grey">
                        <i class="bi bi-search"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </div>

                  <Table
                    className=" table-info mr-2"
                    style={{
                      WebkitTextFillColor: "white",
                      borderColor: "#16171B",
                      fontSize: 14,
                    }}
                  >
                    <thead className="text-white" style={{ fontSize: 14 }}>
                      <tr className="">
                        <th>Product</th>
                        <th>
                          Date
                          <i
                            class="bi bi-arrow-up p-2 "
                            style={{
                              WebkitTextFillColor: "grey",
                              fontSize: "10px",
                            }}
                          ></i>
                        </th>
                        <th>Quantity</th>
                        <th className="text-center">Expiration</th>
                        <th className="text-center">Location</th>
                        <th className="text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody
                      className=""
                      style={{ WebkitTextFillColor: "#7E7D7C" }}
                    >
                      <tr className="">
                        <td>Hybrid</td>
                        <td>26 Apr 2024</td>
                        <td>50</td>
                        <td className="text-center">
                          <Button
                            className=" border-0"
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
                            2 Days
                          </Button>
                        </td>
                        <td> Italy </td>
                        <td>
                          <Button className=" buttons-ani bg-cards border-gray3 text-grey button-bg">
                            View
                          </Button>{" "}
                          <Button
                            onClick={notify}
                            className=" me-0 buttons-ani bg-cards border-gray3 text-grey button-bg"
                          >
                            Download
                          </Button>{" "}
                        </td>
                      </tr>
                      <tr className="pr-2">
                        <td
                          class="bg-grey2 rounded-end-0 rounded-2"
                          colSpan={3}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <div class=" d-flex align-items-center justify-content-between ">
                              <div className="">
                                <span className="me-2">Data Left : 6.2GB</span>
                                <span
                                  className=" border border-dark rounded-2 p-1 me-3 m-2 text-center"
                                  style={{ fontSize: 13 }}
                                >
                                  100%
                                </span>
                              </div>
                              <div>
                                <ProgressBar
                                  variant="red3"
                                  now={100}
                                  style={{
                                    width: 200,
                                    height: 10,
                                    backgroundColor: "#16171B",
                                    marginBlockStart: "10px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="bg-grey2" colSpan={2}>
                          <span className="me-2">|</span>
                          <span className="me-2">Used Today : 1.2GB</span>
                        </td>
                        <td class="bg-grey2 rounded-start-0 rounded-3 text-end">
                          <Button
                            onClick={() => setModalShow(true)}
                            className=" bg-cards border-0 bg-red2 rounded-3 "
                            style={{
                              WebkitTextFillColor: "white",
                            }}
                          >
                            Topup
                          </Button>
                        </td>
                      </tr>

                      <tr className="">
                        <td>Hybrid</td>
                        <td>26 Apr 2024</td>
                        <td>50</td>
                        <td className="text-center">
                          <Button
                            className=" border-0"
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
                            2 Days
                          </Button>
                        </td>
                        <td> Italy </td>
                        <td>
                          <Button className=" buttons-ani bg-cards border-gray3 text-grey button-bg">
                            View
                          </Button>{" "}
                          <Button
                            onClick={notify}
                            className=" me-0 buttons-ani bg-cards border-gray3 text-grey button-bg"
                          >
                            Download
                          </Button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="bg-grey2 rounded-end-0 rounded-2"
                          colSpan={3}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <div class=" d-flex align-items-center justify-content-between ">
                              <div className="">
                                <span className="me-2">Data Left : 6.2GB</span>
                                <span
                                  className="border border-dark rounded-2 p-1 me-2 m-2 text-center"
                                  style={{ fontSize: 13 }}
                                >
                                  100%
                                </span>
                              </div>
                              <div>
                                <ProgressBar
                                  variant="green2"
                                  now={50}
                                  style={{
                                    width: 200,
                                    height: 10,
                                    backgroundColor: "#16171B",
                                    marginBlockStart: "10px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="bg-grey2" colSpan={2}>
                          <span className="me-2">|</span>
                          <span className="me-2">Used Today : 1.2GB</span>
                        </td>
                        <td
                          class="bg-grey2 rounded-start-0 rounded-3"
                          colSpan={1}
                        ></td>
                      </tr>
                      <tr className="">
                        <td>Hybrid</td>
                        <td>26 Apr 2024</td>
                        <td>50</td>
                        <td className="text-center">
                          <Button
                            className=" border-0"
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
                            2 Days
                          </Button>
                        </td>
                        <td> Italy </td>
                        <td>
                          <Button className=" buttons-ani bg-cards border-gray3 text-grey button-bg">
                            View
                          </Button>{" "}
                          <Button
                            onClick={notify}
                            className=" me-0 buttons-ani bg-cards border-gray3 text-grey button-bg"
                          >
                            Download
                          </Button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="bg-grey2 rounded-end-0 rounded-2"
                          colSpan={3}
                        >
                          <div className="d-flex align-items-center justify-content-between">
                            <div class=" d-flex align-items-center justify-content-between ">
                              <div className="">
                                <span className="me-2">Data Left : 6.2GB</span>
                                <span
                                  className="border border-dark rounded-2 p-1 me-2 m-2 text-center"
                                  style={{ fontSize: 13 }}
                                >
                                  100%
                                </span>
                              </div>
                              <div>
                                <ProgressBar
                                  variant="green2"
                                  now={50}
                                  style={{
                                    width: 200,
                                    height: 10,
                                    backgroundColor: "#16171B",
                                    marginBlockStart: "10px",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="bg-grey2" colSpan={2}>
                          <span className="me-2">|</span>
                          <span className="me-2">Used Today : 1.2GB</span>
                        </td>
                        <td
                          class="bg-grey2 rounded-start-0 rounded-3"
                          colSpan={1}
                        ></td>
                      </tr>
                      <tr className="">
                        <td>Hybrid</td>
                        <td>26 Apr 2024</td>
                        <td>50</td>
                        <td className="text-center">
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
                        <td> Italy </td>
                        <td>
                          <Button className=" buttons-ani bg-cards border-gray3 text-grey button-bg">
                            View
                          </Button>{" "}
                          <Button
                            onClick={notify}
                            className=" me-0 buttons-ani bg-cards border-gray3 text-grey button-bg"
                          >
                            Download
                          </Button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default HybridProxies;
