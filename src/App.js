import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import { Detail, ListCategories, NavbarComponent, Menus } from "./components";
import React, { Component } from "react";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      pilihCategory: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.pilihCategory)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      pilihCategory: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, pilihCategory } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                pilihCategory={pilihCategory}
              />
              <Col>
                <h6>
                  <strong>Daftar Produk</strong>
                </h6>
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Detail />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
