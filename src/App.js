import React, { useState, useEffect } from 'react';
import './index.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App(){
  

    // state stuff
        const [inputText, setInputText] = useState("");
        const [todos, setTodos] = useState([]);
        const [status, setStatus] = useState("All");
        const [filteredTodos, setFilteredTodos] = useState([]);


    // USE EFFECT
     useEffect(() => {
       filterHandler();
     }, [todos, status])

    // functions and events 
    const filterHandler = () => {
        switch (status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncomplete':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);

        }
    }


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