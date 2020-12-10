import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";

export default class Detail extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h6>
          <strong>Detail Pesanan</strong>
          <hr />
          {keranjangs.length !== 0 && (
            <ListGroup variant="flush">
              {keranjangs.map((menuKeranjang) => (
                <ListGroup.Item key={menuKeranjang.id}>
                  <Row>
                    <Col xs="2">
                      <h5>
                        <Badge pill variant="success">
                          {menuKeranjang.jumlah}
                        </Badge>
                      </h5>
                    </Col>
                    <Col>
                      <h7>{menuKeranjang.product.nama}</h7>
                      <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                    </Col>
                    <Col>
                      <h7>
                        <strong className="float-right">
                          Rp. {numberWithCommas(menuKeranjang.total_harga)}
                        </strong>
                      </h7>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </h6>
        <TotalBayar keranjangs={keranjangs} {...this.props}/>
      </Col>
    );
  }
}
