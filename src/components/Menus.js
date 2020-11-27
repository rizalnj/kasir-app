import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

export const Menus = ({ menu, pilihPesanan }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => pilihPesanan(menu)} style={{cursor: 'pointer'}}>
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>
            <strong>{menu.nama}</strong>
          </Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
// menit 17
