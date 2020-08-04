import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput />
        <TodoItem />
      </header>
    </div>
  );
}

export default App;
