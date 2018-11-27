import React, { Component } from "react";

import { Card, Row, Col, Layout, Button, Avatar, Icon, Badge } from "antd";
import DareClosed from "./dares/DareClosed";
import DareProof from "./dares/DareProof";
import DareSearch from "./dares/DareSearch";
import DareVote from "./dares/DareVote";
import {Link} from "react-router-dom"

import CreateDareScreen from './CreateDareScreen.jsx'

const { Content } = Layout;
const { Meta } = Card;

class List extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Row>
            <Col span={8} />
            <Col span={8}>
            <Link exact to='/'>
              <Card style={{ width: "100% " }}>
                <Row>
                  <Col span={8} />
                  <Col span={8} align="middle">
                    <Avatar
                      size={64}
                      src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg"
                    />
                  </Col>
                  <Col span={8} />
                </Row>
                <Row>
                  <Col span={8} />
                  <Col span={8} align="middle">
                    <p
                      style={{
                        marginTop: 16,
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: 0,
                        color: "black"
                      }}
                    >
                      Павел Любачев
                    </p>
                    <p style={{ marginBottom: 36, color: "grey" }}>
                      Вы 320 в Рейтинге
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col span={8} align="middle">
                    <div>
                      <span style={{ fontWeight: 800, fontSize: "20px" }}>
                        1131
                      </span>
                      <span>
                        {" "}
                        <Icon type="dollar" />
                      </span>
                    </div>
                    <span style={{ marginTop: 16 }}>Баланс</span>
                    <Button type="primary" style={{ marginTop: 10 }}>
                      Обменять
                    </Button>
                  </Col>
                  <Col span={8} align="middle" />
                  <Col span={8} align="middle">
                    <div>
                      <Badge
                        status="error"
                        text={
                          <span style={{ fontWeight: 800, fontSize: "20px" }}>
                            3
                          </span>
                        }
                      />
                    </div>
                    <span style={{ marginTop: 16 }}>Все споры</span>
                    <Button type="default" style={{ marginTop: 10 }}>
                      Смотреть
                    </Button>
                  </Col>
                </Row>
              </Card>
              <Link to='/CreateDareScreen'>
              <Card style={{ width: "100% ", marginTop: 10, borderRadius: 10 }}>

                <Card.Grid
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: 18,
                    borderRadius: 10
                  }}
                >
                  <h3 style={{ marginBottom: 7 }}>Создай свой спор</h3>
                  <p
                    style={{
                      color: "grey"
                    }}
                  >
                    Спорь с людьми и выигрывай ценные призы!
                  </p>
                </Card.Grid>

              </Card>
              </Link>
              <Link to='/best'>
              <Card style={{ width: "100% ", marginTop: 10, borderRadius: 10 }}>
                <Card.Grid
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: 18,
                    borderRadius: 10
                  }}
                >
                  <h3 style={{ marginBottom: 7 }}>
                    <Icon
                      type="star"
                      theme="filled"
                      style={{ color: "gold" }}
                    />{" "}
                    Лучшие спорщики
                  </h3>
                  <p
                    style={{
                      color: "grey"
                    }}
                  >
                    Первые 10 человек получат специальные призы, участвую в
                    спорах и зарабатывай монеты
                  </p>
                </Card.Grid>


              </Card>
</Link>
              <DareClosed />
              <DareProof />
              <DareSearch />
              <DareVote />
              </Link>
            </Col>
            <Col span={8} />
          </Row>
        </Layout>
      </div>
    );
  }
}

export default List;
