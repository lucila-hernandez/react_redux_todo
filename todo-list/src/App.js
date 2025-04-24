import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Redux To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;