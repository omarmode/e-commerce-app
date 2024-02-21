import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProductCard from "./ProductCard";
import { json } from "react-router-dom";
import { Roll } from "react-awesome-reveal";

function ProductsList() {
  const apicategory = "https://fakestoreapi.com/products/categories";
  const api = "https://fakestoreapi.com/products";
  const [products, setproducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const getproductes = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  const getcategores = () => {
    fetch(apicategory)
      .then((res) => res.json())
      .then((data) => setcategories(data));
  };
  const getproductincategory = (catname) => {
    console.log(catname);
    //'https://fakestoreapi.com/products/category/jewelery'
    fetch(`https://fakestoreapi.com/products/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setproducts(data));
  };
  useEffect(() => {
    getproductes();
    getcategores();
  }, []);
  return (
    <Container>
      <h2 className="text-center">Our Product</h2>
      <Row className="my-5   ">
        <div className="d-flex justify-content-center mx-2 col-sm-12">
          <Roll>
            <button
              className="btn btn-primary   "
              onClick={() => {
                getproductes();
              }}
            >
              All
            </button>
            {categories.map((cat) => {
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    getproductincategory(cat);
                  }}
                  className="btn btn-primary  "
                >
                  {cat}
                </button>
              );
            })}
          </Roll>
        </div>
      </Row>
      <Row>
        <br />
        <br />
        {products.map((product) => {
          return (
            <Col key={product.id} xs="6" sm="6" md="4" lg="3" className=" m-3">
              <ProductCard
                product={product}
                showButton={true}
                showDetails={false}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductsList;
