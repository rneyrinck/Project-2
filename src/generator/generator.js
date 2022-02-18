import { useState } from "react";
import { Button, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { BsBookmarkPlus } from "react-icons/bs";
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
            <Card.Header>{props.galaxyCardData.data[0].title} </Card.Header>
            <Card.Img variant="top" src={props.galaxyCardData.links[0].href} />
            <Card.Body>
              <a className="svg_icons" onClick={props.addToCollection}>
                <BsBookmarkPlus />{" "}
              </a>
              <OverlayTrigger
                trigger="click"
                overlay={
                  <Popover id={`popover-positioned-top`}>
                    <Popover.Header as="h3">
                      {props.galaxyCardData.data[0].title}
                    </Popover.Header>
                    <Popover.Body>
                      {props.galaxyCardData.data[0].description}
                    </Popover.Body>
                  </Popover>
                }
              >
                <Button variant="secondary">Learn more</Button>
              </OverlayTrigger>
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
                  <OverlayTrigger
                    trigger="click"
                    overlay={
                      <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">
                          {items.data[0].title}
                        </Popover.Header>
                        <Popover.Body>{items.data[0].description}</Popover.Body>
                      </Popover>
                    }
                  >
                    <Button variant="secondary">More info</Button>
                  </OverlayTrigger>
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
          Press the bookmark button on any card to save it to your collection.
        </p>
      </div>{" "}
      <div className="generator-components">
        <GalaxyCard galaxyCardHTML={galaxyCardHTML} />
        <button onClick={APICall} className="main-btn">
          <span className="span-icon">
            <IoMdColorWand />
          </span>{" "}
          Generate
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
    </section>
  );
};
export default Generator;
