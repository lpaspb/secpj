import React, { Component } from 'react';

import { Skeleton, Card, Icon, Avatar, Radio, Tag, Button, Row, Col, Layout } from 'antd';
import List from './components/List'

import './App.css';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;


class App extends Component {
  render() {
    return (
      <List/>
    );
  }
}

export default App;
