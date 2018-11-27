import React, {Component} from 'react';
import { Card, Row, Col, Layout, Button, Avatar, Icon, Badge, Form, Input, InputNumber } from "antd";
const { Content } = Layout;
const { Meta } = Card;



class CreateDareScreen extends Component {
  render() {
    return (

      <Layout>
        <Row>
          <Col span={8} />
          <Col span={8}>
          <Form onSubmit={this.handleSubmit}>

     <Form.Item
       label="Название спора"

     >
         <Input />
     </Form.Item>

     <Form.Item
       label="Описание спора"
     >
         <Input.TextArea />
     </Form.Item>

     <Form.Item
       label="Ставка"
     >
         <InputNumber />

     </Form.Item>

     <Form.Item
          
        >
          <Button type="primary" htmlType="submit">Создать спор</Button>
        </Form.Item>

     </Form>



          </Col>
          <Col span={8} />
          </Row>
</Layout>
    )
  }
}

export default CreateDareScreen
