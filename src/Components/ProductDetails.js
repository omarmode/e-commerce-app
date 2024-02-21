import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Productdes from "./productdes";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const prams = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch(`${api_url}/${prams.ProductId}`)
      .then((res) => res.json())
      .then((product) => setproduct(product));
  }, []);
  return <Productdes product={product} showButton={false} showDetails={true} />;
}

export default ProductDetails;
