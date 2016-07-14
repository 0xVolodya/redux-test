var React = require("react"),
  
 AddTodo = require("../containers/AddTodo"),
 VisibleTodoList  = require("../containers/VisibleTodoList");


var TodoApp = function TodoApp() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      
     
    </div>
  )
};

export default TodoApp
