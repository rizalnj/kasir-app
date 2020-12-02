import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

export default class Sukses extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Image src="assets/images/sukses.svg" width="500" />
        <h2>Sukses Pesan </h2>
        <p>Terimakasih Sudah Memesan!</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
