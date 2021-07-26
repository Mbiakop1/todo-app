import React, { useState } from 'react';
import './index.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App(){

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("All");
    const [filteredTodos, setFilteredTodos] = useState([]);
    return (
        <div className="App">
          <header>
              <h1>My Todo list</h1>
          </header>
          <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
          <TodoList setTodos={setTodos}  todos={todos}/>
        </div>
    );
}
 
export default App;