//pass props to a component - same as passing props and then using props.addTodo later on - using object destructuring
import { useState } from 'react';
import { api } from './api';

function TodoForm({addTodo}){
  const [value,setValue] = useState('');
  
  //add dependedency to component - mimicking what would happen with API that would return a promise
  const handleSubmit = e => {
    e.preventDefault();
    api.createItem(value).then((persistedItem) => {
      if(!value) return;
      addTodo(value);
      setValue('');
    })
    // if(!value) return;
    // addTodo(value);
    // setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Add ToDo </label>
      <input
        id="new-todo" 
        type="text"
        className="input"
        value={value}
        placeholder="Add task"
        onChange={e => setValue(e.target.value)} />
        <button>Add</button>
    </form>
  )
}

export default TodoForm;