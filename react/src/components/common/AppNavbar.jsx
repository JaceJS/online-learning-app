import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <header id="header" className="fixed-top">
            <Navbar>
                <Container className="d-flex align-items-center">
                    <Navbar.Brand className="logo me-auto">
                        <NavLink to="/">Mentor</NavLink>
                    </Navbar.Brand>

                    <Nav className="order-last order-lg-0">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/courses">Courses</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </Nav>

                    <NavLink to="/login">
                        <Button className="login-btn">Login</Button>
                    </NavLink>
                </Container>
            </Navbar>
        </header>
    );
};

export default AppNavbar;
