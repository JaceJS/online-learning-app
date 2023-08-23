import { Col, Container, Nav, Row } from "react-bootstrap";

const AppFooter = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg={4} md={6} className="footer-contact">
                            <h3>Mentor</h3>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022
                                <br />
                                United States <br />
                                <br />
                                <strong>Phone:</strong> +1 5589 55488 55
                                <br />
                                <strong>Email:</strong> info@example.com
                                <br />
                            </p>
                        </Col>

                        <Col lg={4} md={6} className="footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <Nav.Link href="#">Home</Nav.Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <Nav.Link href="#">About us</Nav.Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <Nav.Link href="#">Services</Nav.Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <Nav.Link href="#">
                                        Terms of service
                                    </Nav.Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>{" "}
                                    <Nav.Link href="#">Privacy policy</Nav.Link>
                                </li>
                            </ul>
                        </Col>

                        <Col lg={4} md={6} className="footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>
                                Tamen quem nulla quae legam multos aute sint
                                culpa legam noster magna
                            </p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className="d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright{" "}
                        <strong>
                            <span>Mentor</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                </div>
                <Nav className="social-links text-center text-md-right pt-3 pt-md-0">
                    <Nav.Link href="#" className="facebook">
                        <i className="bx bxl-facebook"></i>
                    </Nav.Link>
                    <Nav.Link href="#" className="instagram">
                        <i className="bx bxl-instagram"></i>
                    </Nav.Link>
                    <Nav.Link href="#" className="youtube">
                        <i className="bx bxl-youtube"></i>
                    </Nav.Link>
                    <Nav.Link href="#" className="twitter">
                        <i className="bx bxl-twitter"></i>
                    </Nav.Link>
                    <Nav.Link href="#" className="linkedin">
                        <i className="bx bxl-linkedin"></i>
                    </Nav.Link>
                </Nav>
            </Container>
        </footer>
    );
};

export default AppFooter;
