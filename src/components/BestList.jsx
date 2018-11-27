import React, {Component} from 'react';
import { Card, Row, Col, Layout, Button, Avatar, Icon, Badge, Form, Input, InputNumber, List} from "antd";
const { Content } = Layout;
const { Meta } = Card;


const list = [
  {
    name : {
      last: 'Pavel'
    }
  }


]

class BestList extends Component {
  render() {
    return (
      <Layout>
        <Row>
          <Col span={8} />
          <Col span={8}>
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={false}
              />
              <div>content</div>
          </List.Item>
        )}
      />
      </Col>
      <Col span={8} />
      </Row>
      </Layout>
    )
  }
}

export default BestList
