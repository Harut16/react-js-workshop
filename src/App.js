import React, { useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm';
import Todolist from './components/Todolist';

const App = () => {

const [todo, settodo]=useState("");
const [todos, settodos]=useState([]);
const[editid, seteditid]=useState(0);

const handleSubmit=(e)=>{
 e.preventDefault();
 
 if(editid){
  const editTodo=todos.find((i)=>i.id===editid);
const updatedTodos=todos.map((t)=>t.id===editTodo.id?(
  t={id:t.id,todo}):{id:t.id,todo:t.todo}
);
settodos(updatedTodos);
seteditid(0);
settodo("");
return;
 }

 if(todo!==''){
  settodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
  settodo("");
 }

};

 const handleDelete=(id)=>{
  const delTodo=todos.filter((to)=>to.id!==id);
  settodos ([...delTodo]);
 }

 const handleEdit=(id)=>{
 
 const eidtTodo=todos.find((i)=>i.id===id);
 settodo(eidtTodo.todo);
 seteditid(id);
 };

  return (
    <div className='App'>
      <div className='container'>
      <h1>Todo List App</h1>
      <TodoForm handleSubmit={handleSubmit} todo={todo} settodo={settodo} editid={editid} />
      <Todolist todos={todos} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

export default App