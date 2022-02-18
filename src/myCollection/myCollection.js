import { useState } from "react";
import { Button, Card, OverlayTrigger, Popover } from "react-bootstrap";

import "./myCollection.css";

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
    <section className="my-collection">
      <div className="title-explainer">
        <h1>My Collection</h1>
        <p>
          This is where you can save interesting or aesthetically pleasing
          trading cards from the generator. Press the 'show collection' button
          below to see what you've saved!
        </p>
      </div>{" "}
      <button onClick={collectionLister} className='main-btn'>Show Collection</button>
      <div className="collection-list">{collectionHTML}</div>
    </section>
  );
};
export default MyCollection;
