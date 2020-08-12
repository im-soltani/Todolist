import React, {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from'./components/TodoForm';




function App() {

  const [todos, setTodos] = useState([]);

  // add the todo to the todos array

  function addTodo(todo){
    const newTodos = [...todos,
      {text:todo,
        id:todos.length
       }];
    setTodos(newTodos);
  }

  // delete function

  function removeTodo(id) {
    const newTodos = [...todos];

    newTodos.splice(id,1);

    setTodos(newTodos);
  }
// edit function
function edit(id,newtodo){
setTodos( todos.map((todo)=>{

    return todo.id===id ? {...todo, text : newtodo}:todo
  }))
}

 
    return(
      <div className="app">
      <TodoForm addTodo={addTodo}/>
      <Todo todos={todos} removeTodo={removeTodo} edit={edit} />
        


      </div>
    );
  }
export default App

