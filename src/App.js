import React from 'react';
import './App.css';
import AllTodoList from './components/AllTodoList';
import { HashRouter, Route } from 'react-router-dom';
import AllFinishedTodoList from './components/AllFinishedTodoList';
import TodoMenu from './components/TodoMenu';
import { Row, Col } from 'antd';

function App() {
  return (<Row>
    <Col span={10} offset={7}>
      <HashRouter>
        <TodoMenu />
        <Route exact path="/" component={AllTodoList}/>
        <Route path="/finished" component={AllFinishedTodoList}/>
      </HashRouter>
    </Col>
  </Row>);
}

export default App;
