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
            Galaxy
            <br />
            <span className="sub-title">Trading Cards</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example"></Navbar.Toggle>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <Link to="/Project-2/">Generate</Link>
              <Link to="/Project-2/myCollection">My Collection</Link>
              <Link to="/Project-2/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
