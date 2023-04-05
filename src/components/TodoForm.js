import React from 'react'

const TodoForm = ({handleSubmit,todo,editid,settodo}) => {
  return (
    <form className='todoform' onSubmit={handleSubmit}>
        <input
         type='text'
         value={todo} 
         onChange={(e)=>settodo(e.target.value)} 
         />
        <button type='submit'>{editid?"Edit":"Go"}</button>
      </form>
  )
}

export default TodoForm