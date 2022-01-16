//pass props to a component - same as passing props and then using props.addTodo later on - using object destructuring
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add to-do..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}