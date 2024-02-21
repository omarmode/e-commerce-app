import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product, showButton, showDetails }) {
  // console.log(product);
  return (
    <Card style={{ width: "18rem", maxHeight: "270px" }}>
      <Card.Img
        style={{ height: "120px", width: "100px" }}
        src={product.image}
      />
      <Card.Body>
        <Card.Title className="card-title1">{product.title}</Card.Title>
        <br />
        {/* <Card.Text>{product.category}</Card.Text> */}
        {/* <Card.Text>{product.description}</Card.Text> */}
        {showDetails && <Card.Text>{product.description}</Card.Text>}
        <Card.Text className="title-text">{product.price}$</Card.Text>
        {showButton && (
          <Link
            className="btnm btn btn-primary"
            to={`/product/${product.id}`}
            variant="primary"
          >
            Ditiels
          </Link>
        )}
        {/* <Button className="btn btn-m1" variant="primary">
          Go somewhere
        </Button> */}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
