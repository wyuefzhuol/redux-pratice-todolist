import React from 'react';
import './App.css';
import AllTodoList from './components/AllTodoList';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Route exact path="/" component={AllTodoList}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
