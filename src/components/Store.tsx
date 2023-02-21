import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import items from "../data/items.json";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;
