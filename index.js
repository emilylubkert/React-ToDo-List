function App(){
  const [todos, setTodos] = React.useState([]);
  const [showAlert, setShowAlert] = React.useState(false);

  console.log(todos);
 
  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }


  const removeTodo = index => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
    if (temp.length === 0){
      setShowAlert(true);
      console.log("alert");
    }

  }

  return(
    <div className="app">
      <ul className="todo-list" >
        {todos.map((todo, i) => <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo} />
      </ul>
      {showAlert && <AllDone allDone={setShowAlert}/>}
    </div>)
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

