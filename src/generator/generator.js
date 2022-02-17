import { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  BsBookmarkXFill,
  BsBookmarkPlus,
  BsDownload,
  BsShare,
  BsChevronDown,
} from "react-icons/bs";

import GalaxyCard from "../galaxyCard/galaxyCard";

import "./generator.css";
const Generator = (props) => {
  const [galaxyCardHTML, setGalaxyCardHTML] = useState(
    <Card>
      <Card.Body>What will you get?</Card.Body>
    </Card>
  );

  const APICall = () => {
    props.getGalaxyAPI();
    var node = document.getElementById("my-node");

    if (props.galaxyCardData) {
      setGalaxyCardHTML(
        <>
          <Card id="galCard">
            <Card.Header>{props.galaxyCardData.data[0].title}</Card.Header>
            <Card.Img variant="top" src={props.galaxyCardData.links[0].href} />
            <Card.Body>
              <Navbar expand="lg">
                <Container fluid>
                  <Navbar.Toggle aria-controls="navbarScroll">
                    <Navbar.Brand>
                     Learn more <BsChevronDown/>
                    </Navbar.Brand>
                  </Navbar.Toggle>
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    >
                      <Card.Text>
                        {props.galaxyCardData.data[0].description}
                      </Card.Text>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Card.Body>
          </Card>
          {/* BsBookmarkXFill,BsBookmarkPlus,BsDownload,BsShare */}
          <div className="socials">
            <a className="svg_icons" onClick={props.addToCollection}>
              <BsBookmarkPlus />
            </a>
            <a className="svg_icons">
              <BsDownload />
            </a>
            <a className="svg_icons">
              <BsShare />
            </a>
          </div>
        </>
      );
    } else {
      setGalaxyCardHTML(
        <Card>
          <Card.Body>Click one more time!</Card.Body>
        </Card>
      );
    }
  };

  return (
    <section className="generator">
      <GalaxyCard galaxyCardHTML={galaxyCardHTML} />

      <button onClick={APICall}>
        <span className="span-icon"></span> GENERATE
      </button>
    </section>
  );
};
export default Generator;
