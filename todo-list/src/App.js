import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState([])

  function addTodo(newTodo){
    setList([...list, newTodo])
  }

  function handleTodo(todoItem){
    let filter = list.filter((element)=>{
      return element !== todoItem
    })

    setList([...filter])
  }

  return (
    <div className="App">
      <Form submitCallBack={addTodo}/>
      <TodoList list={list} buttonCallBack={handleTodo}/>
    </div>
  );
}

export default App;
