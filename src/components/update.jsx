import { Container, Form, Button, Image } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import img from "../assets/pfp.jpeg";

function Update() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const togglePass = () => setShowPass(!showPass);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:5000/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      alert("Error updating user");
    }
  };

  return (
    <Container
      fluid
      className="border border-dark bg-dark2"
      style={{ height: "100vh" }}
    >
      <Container
        className="mt-5 w-25 form-container border border-dark rounded-3 bg-cards"
        style={{ width: "30%" }}
      >
        <div className="text-center">
          <Image
            src={img}
            height="100px"
            className="m-2 p-3 centered rounded-5"
          />
          <br></br>
          <Form.Label className="fs-3 fw-bold">Edit Profile</Form.Label>
        </div>

        <Form className="p-3" onSubmit={handleSubmit}>
          <Form.Group className="pb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              placeholder="Username"
              className="button-bg border-0 text-white"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="fullName"
              placeholder="Full Name"
              className="button-bg border-0 text-white"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email Address"
              className="button-bg border-0 text-white"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label>Password</Form.Label>
            <div className="d-flex">
              <Form.Control
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="button-bg border-0 text-white rounded-end-0"
                value={formData.password}
                onChange={handleChange}
              />
              <i
                onClick={togglePass}
                className="rounded-start-0 button-bg rounded-2 text-white btn bi bi-eye"
              ></i>
            </div>
          </Form.Group>
          <Form.Group className="pb-3">
            <Button
              className="w-100 border-0"
              type="submit"
              style={{
                backgroundColor: "#EC532D",
              }}
            >
              Update
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  );
}

export default Update;
