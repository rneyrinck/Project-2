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
import { IoMdColorWand } from "react-icons/io";
import { Route, Routes } from "react-router";
import GalaxyCard from "../galaxyCard/galaxyCard";
import MyCollection from "../myCollection/myCollection";

import "./generator.css";
const Generator = (props) => {
  const [galaxyCardHTML, setGalaxyCardHTML] = useState(
    <Card>
      <Card.Body>What will you get?</Card.Body>
    </Card>
  );

  const APICall = () => {
    props.getGalaxyAPI();

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
                      Learn more <BsChevronDown />
                    </Navbar.Brand>{" "}
                  </Navbar.Toggle>
                  <a className="svg_icons" onClick={props.addToCollection}>
                    <BsBookmarkPlus />
                  </a>
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
        </>
      );
    } else {
      setGalaxyCardHTML(
        <Card>
          <Card.Body>Double Click!</Card.Body>
        </Card>
      );
    }
  };
  const [collectionHTML, setCollectionHTML] = useState(
    <Card>
      <Card.Body>Saved cards will appear here</Card.Body>
    </Card>
  );
  const collectionLister = () => {
    if (props.collectionData) {
      setCollectionHTML(
        props.collectionData.map((items) => {
          return (
            <>
              <Card key={items.href}>
                <Card.Header>{items.data[0].title}</Card.Header>
                <Card.Img variant="top" src={items.links[0].href} />
                <Card.Body>
                  <Navbar expand="lg">
                    <Container fluid>
                      <Navbar.Toggle aria-controls="navbarScroll">
                        <Navbar.Brand>
                          Learn more <BsChevronDown />
                        </Navbar.Brand>{" "}
                      </Navbar.Toggle>
                      <Navbar.Collapse id="navbarScroll">
                        <Nav
                          className="me-auto my-2 my-lg-0"
                          style={{ maxHeight: "100px" }}
                          navbarScroll
                        >
                          <Card.Text>{items.data[0].description}</Card.Text>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </Card.Body>
              </Card>
            </>
          );
        })
      );
    } else {
      setCollectionHTML(
        <Card>
          <Card.Body>Saved cards will appear here</Card.Body>
        </Card>
      );
    }
  };
  return (
    <section className="generator">
      <div className="title-explainer">
        <h1>Generator</h1>
        <p>
          Generate a trading card by pressing the "generate" button three times.
          <br /> Click on "Learn more" for a dropdown with a description of the
          image.
          <br />
          Press the bookmark button on anycard to save it to your collection.
        </p>
      </div>{" "}
      <div className="generator-components">
      <GalaxyCard galaxyCardHTML={galaxyCardHTML} />
      <button onClick={APICall}>
        <span className="span-icon">
          <IoMdColorWand />
        </span>{" "}
        GENERATE
      </button>
      </div>
      <Routes>
        <Route
          path="/Project-2/myCollection"
          element={
            <MyCollection
              collectionLister={collectionLister}
              collectionHTML={collectionHTML}
              setCollectionHTML={setCollectionHTML}
            />
          }
        />
      </Routes>
      {/* <div>
        <h3 onClick={collectionLister}>My Collection <BsChevronDown /></h3>
        <MyCollection collectionHTML={collectionHTML} />
      </div> */}
    </section>
  );
};
export default Generator;
