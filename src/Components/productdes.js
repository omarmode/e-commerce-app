import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function Productdes({ product, showDetails, showButton }) {
  return (
    <Row>
      <Col md="12" xs="12" sm="12" className=" align-items-center">
        <img className="w-20 img-movie " src={product.image} />
        <div>
          <div className="card-title1">{product.title}</div>
          <br />
          {/* <Card.Text>{product.category}</Card.Text> */}
          {/* <Card.Text>{product.description}</Card.Text> */}
          {showDetails && <div>{product.description}</div>}
          <br></br>
          <div className="title-text">{product.price}$</div>
          {showButton && (
            <Button className="btnm" variant="primary">
              Ditiels
            </Button>
          )}
          <br />
          <Button variant="primary" href="/">
            Home
          </Button>
          {/* <Button className="btn btn-m1" variant="primary">
          Go somewhere
        </Button> */}
        </div>
      </Col>
    </Row>
  );
}

export default Productdes;
