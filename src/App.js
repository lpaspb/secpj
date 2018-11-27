import React, { Component } from 'react';

import { Skeleton, Card, Icon, Avatar, Radio, Tag, Button, Row, Col, Layout } from 'antd';
import List from './components/List'
import CreateDareScreen from './components/CreateDareScreen'
import BestList from './components/BestList.jsx'



import './App.css';
import {
  Link,
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;


class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
      <div>
      <Route exact path="/" component={List} />
      <Route path="/createDareScreen" component={CreateDareScreen} />
      <Route path="/best" component={BestList} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
