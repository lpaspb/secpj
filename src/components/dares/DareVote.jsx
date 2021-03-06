import React, { Component } from 'react';

import { Skeleton, Card, Icon, Avatar, Radio, Tag, Button, Row, Col, Layout } from 'antd';

const { Meta } = Card;


class DareVote extends Component {

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
      <Icon
        type="heart"
        theme="filled"
        style={{
          marginRight: "5px",
          color: "red",
          fontSize: "18px",
          verticalAlign: "middle"
        }}
      />
      <span style={{ color: "red" }}>2</span>
    </div>,
    <Radio.Group>
      <Radio.Button value="large">Павел</Radio.Button>
      <Radio.Button value="default">Тиен</Radio.Button>
    </Radio.Group>,
    <div>
      <Avatar
        style={{ marginRight: 10 }}
        src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg"
      />
      <Icon
        type="heart"
        theme="filled"
        style={{
          marginRight: "5px",
          color: "red",
          fontSize: "18px",
          verticalAlign: "middle"
        }}
      />
      <span style={{ color: "red" }}>2</span>
    </div>
  ]}
  activeTabKey="1"
>
  <Skeleton loading={false} avatar active>
    <Meta
      avatar={
        <Avatar src="https://pp.userapi.com/NOGkthIy-CqOlvspDqZxLTZq6fg8WbjyFKI00g/v85SP4U2Rng.jpg" />
      }
      title="Чихни с открытыми глазами"
      description={
        <div>
          <Tag color="gold">Выигрыш: 200 <Icon type="dollar" /></Tag>{" "}
          <Tag color="green">Идет Голосование</Tag>
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

  <video
    controls="controls"
    style={{ width: "100%", marginTop: "20px" }}
    autoplay
  />
</Card>
)}}

export default DareVote
