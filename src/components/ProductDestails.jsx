import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

function ProductDestails({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  return (
    <div className="product">
      <div className="container py-5">
        {product ? (
          <Card style={{ width: "18rem" }} className="m-auto">
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title> {product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        ) : (
          <Spinner animation="grow" variant="danger" />
        )}
      </div>
    </div>
  );
}

export default ProductDestails;
