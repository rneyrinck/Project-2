import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Generator from "../generator/generator";
import About from "../about/about";
import "./header.css";
import GeneratorBtn from "../generatorbtn/generatorBtn";
import { AiOutlineMenu } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  // const dropDown = () => {
  //   return (
  //     <nav>
  //       <Link to="/About" className="nav about-link">
  //         About
  //       </Link>
  //       <Link to="/" className="nav gen-link">
  //         Generator
  //       </Link>
  //     </nav>
  //   );
  // };
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          Galaxy
          <br />
          <span>Trading Cards</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example"></Navbar.Toggle>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
           <Link to='/'>Generate</Link>
           <Link to='/about'>About</Link>
            {/* <Dropdown.Item href="/Project-2">Home</Dropdown.Item>
            <Dropdown.Item href="/Project-2">Generate</Dropdown.Item>
            <Dropdown.Item href="/Project-2/my-collection">
              My Collection
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/Project-2/about">About</Dropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
//  <Link to="/" className="gtc-title">
//  GALAXY
//  <br /> <span className="trading-card-title">TRADING CARDS</span>
// </Link>

//   <nav>
//  <Link to="/About" className='nav about-link'>About</Link>
//  <Link to="/" className='nav gen-link' >Generator</Link>
// </nav>
// <Dropdown >
//  <Dropdown.Toggle variant="success" id="dropdown-basic" >
// <AiOutlineMenu/>

//  </Dropdown.Toggle>

//  <Dropdown.Menu>
//    <Dropdown.Item href="/about">About</Dropdown.Item>
//    <Dropdown.Item href="/generator">Generator</Dropdown.Item>
//    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//  </Dropdown.Menu>
// </Dropdown>
