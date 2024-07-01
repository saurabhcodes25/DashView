import { Container, Form, Button, Image } from "react-bootstrap";
import img from "../assets/pfp.jpeg";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const navigate = useNavigate();

  const togglePass = () => setShowPass(!showPass);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData,
        { withCredentials: true }
      );
      toast(`${response.data.message}`, {
        className: "popup-background",
        progressClassName: "progress-background",
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if (response.status === 200) {
        setTimeout(() => {
          navigate(`/home/${response.data.userId}`);
        }, 2000);
      }
    } catch (error) {
      toast("Error logging in", {
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
    }
  };

  return (
    <>
      <ToastContainer />
      <ToastContainer />
      <Container
        fluid
        className="border border-dark bg-dark2"
        style={{ height: "100vh" }}
      >
        <Container
          className="mt-5 w-25 form-container bg-cards border rounded-3 border-dark"
          style={{ width: "30%" }}
        >
          <div className="text-center">
            <Image
              src={img}
              height="100px"
              className="m-2 p-3 centered rounded-5"
            />
            <br />
            <Form.Label className="fs-3 fw-bold">Login</Form.Label>
          </div>
          <Form className="p-3" onSubmit={handleSubmit}>
            <Form.Group className="pb-3">
              <Form.Label>Username/Email</Form.Label>
              <Form.Control
                className="button-bg border-0 text-white"
                placeholder="Username or Email"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="pb-3">
              <Form.Label>Password</Form.Label>
              <div className="d-flex">
                <Form.Control
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="button-bg border-0 text-white rounded-end-0"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <i
                  onClick={togglePass}
                  className="rounded-start-0 rounded-2 button-bg text-white btn bi bi-eye"
                ></i>
              </div>
            </Form.Group>
            <Form.Group className="pb-3">
              <Button
                className="w-100 border-0"
                type="submit"
                style={{ backgroundColor: "#EC532D" }}
              >
                Login
              </Button>
            </Form.Group>
            <div className="text-center" style={{ fontSize: 14 }}>
              <Link to={"/register"} className="border-0 text-grey  my-2 me-3">
                Not a member? Register
              </Link>
            </div>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default Login;
