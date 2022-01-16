function Todo({todo, index, remove}) {
    function handle(){
        remove(index);
    }
  
    return (
        <div>
            <li 
                className="todo">{todo.text} 
                <button type="button" className="btn" onClick={handle}>Done!</button>
            </li>
      </div>
    ) 
}

