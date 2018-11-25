import React, { Component } from 'react';

import { Skeleton, Card, Icon, Avatar, Radio, Tag, Button, Row, Col, Layout } from 'antd';

const { Meta } = Card;


class DareSearch extends Component {

render() {
return (

<Card
  style={{ width: '100%', marginTop: 16 }}
  actions={[
    <div>
      <Avatar
        style={{ marginRight: 10 }}
        src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"
      />
    </div>,
    <Button type="primary">Принять вызов</Button>
  ]}
  activeTabKey="1"
>
  <Skeleton loading={false} avatar active>
    <Meta
      avatar={
        <Avatar src="https://pp.userapi.com/c847120/v847120721/113c58/N3y7uhFJhs8.jpg" />
      }
      title="Чихни с открытыми глазами"
      description={
        <div>
          <Tag color="gold">Выигрыш: 200 У.Е</Tag>{" "}
          <Tag color="blue">Поиск соперника</Tag>
          <p style={{ marginTop: "15px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat
          </p>
          <h4 style={{ marginTop: "15px" }}>Осталось 22:59</h4>
        </div>
      }
    />
  </Skeleton>
</Card>
)}}

export default DareSearch
