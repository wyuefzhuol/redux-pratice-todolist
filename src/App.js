import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table border="1">
          <thead>
            <tr><th><TodoInput /></th></tr>
          </thead>
          <tbody>
            <tr><td><TodoList /></td></tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
