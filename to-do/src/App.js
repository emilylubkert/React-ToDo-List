import "./App.css";
import "./styles.css";
import { useState } from "react";
import TodoForm from "./TodoForm.js";
import Todo from "./Todo.js";
import AllDone from "./AllDone.js";
import MyComponent from "./MyComponent";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  console.log(todos);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
    if (temp.length === 0) {
      setShowAlert(true);
      console.log("alert");
    }
  };

  return (
    <div className="app">
      <h1>ToDo</h1>
      <ul className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </ul>
      {showAlert && <AllDone allDone={setShowAlert} />}
      <MyComponent />
    </div>
  );
}

export default App;
