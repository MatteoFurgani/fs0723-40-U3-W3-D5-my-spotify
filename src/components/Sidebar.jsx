import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Sidebar = () => {
  return (
    <Container>
      <Row className=" flex-column align-item-center">
        <Col xs={2}>
          <Navbar expand="md" fixed="left" id="sidebar">
            <Navbar.Brand href="#">
              <img
                src="../logo.png"
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse
              className=" align-items-start "
              id="navbarNavAltMarkup"
            >
              <Nav className="flex-column ms-3">
                <Nav.Link href="#">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
                <Nav.Link href="#">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
                <Form className="mt-3 d-flex align-items-stretch me-3">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 flex-grow-1"
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    className="rounded-right"
                  >
                    GO
                  </Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
            <Row className="nav-btn">
              <Col>
                <Button
                  className="signup-btn"
                  variant="light"
                  type="button"
                  style={{ borderRadius: "50px" }}
                >
                  Sign Up
                </Button>
              </Col>
              <Col>
                <Button
                  className="login-btn border border-white bg-black "
                  variant="dark"
                  type="button"
                  style={{ borderRadius: "50px" }}
                >
                  Login
                </Button>
              </Col>
              <Col>
                <div className="d-inline">
                  <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
                </div>
              </Col>
            </Row>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
