import React,{useState} from 'react'
function TodoForm(props) {
const[input,setInput]=useState('');
const handeChange = e =>{
    setInput(e.target.value);
} 
const handleSub = e=>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input
        });
        setInput('');
    };

  return (
    <div>
      <form className='todo-form' onSubmit={handleSub}>
        <input type="text"
        placeholder='Add a todo'
        value={input}
        name= 'text'
        className='todo-input'
        onChange={handeChange}
        />
        <button className='todo-button'>Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm
