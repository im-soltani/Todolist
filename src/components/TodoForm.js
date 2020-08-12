import React,{useState} from 'react';



function TodoForm({addTodo}){

    const [value,setValue] = useState("")
  
    // handle the form
  
    function handleSubmit(e) {
      e.preventDefault();
  
      // check for the value 
  
      if((value !== "") && (value.trim())){
  
      addTodo(value);
  
      setValue("");
      }
    }
  
  
    return(
      <form onSubmit={handleSubmit} className="add-todo-form">
        <h1 className="Title">To Do List</h1>
        <div className="input-container">
        <input type="text" className="input" value={value}
       onChange={e => setValue(e.target.value)}/>
        <button className="my-btn" type="submit"  className="my-btn btn-primary">+</button>
        </div>
      </form>
    )
  }
  export default TodoForm