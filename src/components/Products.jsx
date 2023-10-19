import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  return (
      <div className="container">

      <h2 className="text-danger">Shop with us</h2>
      <div className="row">

      {products.length > 0 ? (
        products.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/Products/${product.category}/${product.id}`}
              className="my-2 col-4 h-50 "
              style={{ fontSize: "1.5rem" }}
            >
                
                    <Card  >
                      <Card.Img variant="top" src={product.image}   />
                      <Card.Body className="h-50  py-5">
                        <Card.Title> {product.title}</Card.Title>
                        <Card.Text>{product.category}</Card.Text>
                      </Card.Body>
                      <Button variant="primary">Show Details</Button>
                    </Card>
                 
            </Link>
          );
        })
      ) : (
        <p>There is no data ...</p>
      )}
    </div>
    </div>
  );
}

export default Products;
