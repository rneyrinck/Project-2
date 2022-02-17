import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { BsBookmarkPlus, BsDownload, BsShare } from "react-icons/bs";

const MyCollection = (props) => {
  const collectionList = props.collectionData.map((items) => {
    return (
      <>
        <Card id="galCard">
          <Card.Header>{items.data[0].title}</Card.Header>
          <Card.Img variant="top" src={items.links[0].href} />
          <Card.Body>
            <Navbar expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll">
                  <Navbar.Brand>
                    {items.data[0].title}
                  </Navbar.Brand>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Card.Text>
                      {items.data[0].description}
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
  });
  return { collectionList };
};
export default MyCollection;
