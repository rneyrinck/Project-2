import { Link } from "react-router-dom";
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            GALAXY TRADING CARDS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example"></Navbar.Toggle>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <Link to="/">Generate</Link>
              <Link to="/myCollection">My Collection</Link>
              <Link to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
