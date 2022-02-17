import { useState } from "react";
import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import {
  BsBookmarkPlus,
  BsChevronDown,
  BsDownload,
  BsShare,
} from "react-icons/bs";
import './myCollection.css'

const MyCollection = (props) => {
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
    <section className="my-collection">
      <div className="title-explainer">
        <h1>My Collection</h1>
        <p>
          This is where you can save interesting or aesthetically pleasing
          trading cards from the generator. Press the 'show collection' button
          below to see what you've saved!
        </p>
      </div>{" "}
      <button onClick={collectionLister}>Show Collection</button>
      <div className="collection-list">{collectionHTML}</div>
    </section>
  );
};
export default MyCollection;
