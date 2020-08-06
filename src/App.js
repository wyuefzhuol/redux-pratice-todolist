import React from 'react';
import './App.css';
import AllTodoList from './components/AllTodoList';
import { HashRouter, Route } from 'react-router-dom';
import AllFinishedTodoList from './components/AllFinishedTodoList';
import TodoMenu from './components/TodoMenu';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';

function App(props) {
  return (<Spin spinning={props.loading}>
    <Row>
      <Col span={10} offset={7}>
        <HashRouter>
          <TodoMenu />
          <Route exact path="/" component={AllTodoList}/>
          <Route path="/finished" component={AllFinishedTodoList}/>
        </HashRouter>
      </Col>
    </Row>
  </Spin>);
}

const mapStateToProps = (state) => ({ loading: state.loadingReducer.loading })

export default connect(mapStateToProps, null)(App);
