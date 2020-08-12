import React from 'react';
import Modale from './Modale';

function Todo({todos,removeTodo,edit}){
 

    return(
    <div >
      
      {todos.map((todo) => (
        <li
          key={todo.id} className="todo-card">
      
        <span className="todo-text">{todo.text}</span>
        
         <button className="my-btn"  onClick={() => removeTodo(todo.id)}>Delete</button>
         <Modale 
         todot={todo.text} 
         edit={edit} 
         id={todo.id}/>
          </li>
      ))}
      
     
     
      
    
    </div>
  
    );
  }
  export default Todo