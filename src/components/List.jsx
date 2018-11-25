import React, { Component } from 'react';

import { Card, Row, Col, Layout, Button, Avatar, Icon, Badge } from 'antd';
import DareClosed from './dares/DareClosed'
import DareProof from './dares/DareProof'
import DareSearch from './dares/DareSearch'
import DareVote from './dares/DareVote'

const { Content} = Layout;
const { Meta } = Card;


class List extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Row>
            <Col span={8} />
            <Col span={8}>
            <Card style={{ width: '100% '}}>
          <Row>
          <Col span={8} />
          <Col span={8} align='middle' >
   <Avatar size={64} src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg" />
   </Col>
   <Col span={8} />
   </Row>
   <Row>
   <Col span={8} />
   <Col span={8} align='middle' >
<h3 style={{ marginTop: 16, marginBottom: 36 }}>Павел Любачев</h3>
</Col>
</Row>
<Row>

<Col span={8} align='middle'>
<div><span style={{ fontWeight: 800, fontSize:'20px' }}>1131</span><span> <Icon type="dollar" /></span></div>
<span style={{ marginTop: 16 }}>Баланс</span>
<Button type='primary' style={{ marginTop: 10 }}>Обменять</Button>
</Col>
<Col span={8} align='middle'/>
<Col span={8} align='middle'>
<div><Badge status="error" text={<span style={{ fontWeight: 800, fontSize:'20px' }}>3</span>} /></div>
<span style={{ marginTop: 16 }}>Все споры</span>
<Button type='default' style={{ marginTop: 10 }}>Смотреть</Button>
</Col>
</Row>
 </Card>
            <DareClosed/>
            <DareProof/>
            <DareSearch/>
            <DareVote/>
            </Col>
            <Col span={8} />
          </Row>
        </Layout>
      </div>
    );
  }
}

export default List
