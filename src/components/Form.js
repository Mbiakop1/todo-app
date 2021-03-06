
import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) =>{

    // here we can write funtions
    const inputTextHandler = (e) => {
       setInputText(e.target.value);
    };

     const subMitTodoHandler = (e) =>{
         e.preventDefault();
         setTodos([
             ...todos, {text: inputText, completed:false, id: Math.random()*1000}
         ]);

         setInputText("");
     }

     const statusHandler = (e) => {
         setStatus(e.target.value);
     } 

    return(
       <form>
      <input value={inputText} type="text"  onChange={inputTextHandler} className="todo-input" />
      <button onClick={subMitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;