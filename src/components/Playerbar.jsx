import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Playerbar = () => {
  const currentSong = useSelector((state) => state.currentSong);
  console.log("Current Song:", currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1 ">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              {currentSong && currentSong.title && (
                <div>
                  <p className="text-white mb-0">{currentSong.title_short}</p>
                </div>
              )}
              <div className="d-flex">
                <a href="#">
                  <img src="../shuffle.png" alt="shuffle" className="mt-0" />
                </a>
                <a href="#">
                  <img src="../prev.png" alt="prev" className="mt-0" />
                </a>
                <a href="#">
                  <img src="../play.png" alt="play" className="mt-0" />
                </a>
                <a href="#">
                  <img src="../next.png" alt="next" className="mt-0" />
                </a>
                <a href="#">
                  <img src="../repeat.png" alt="repeat" className="mt-0" />
                </a>
              </div>
              <div className="progress">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Playerbar;
