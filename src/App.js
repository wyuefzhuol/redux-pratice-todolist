import React from 'react';
import './App.css';
import AllTodoList from './components/AllTodoList';
import { HashRouter, Route } from 'react-router-dom';
import AllFinishedTodoList from './components/AllFinishedTodoList';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Menu />
          <Route exact path="/" component={AllTodoList}/>
          <Route path="/finished" component={AllFinishedTodoList}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
