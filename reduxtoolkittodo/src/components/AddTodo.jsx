import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import{ addTodo } from '../features/todo/todoSlice'
function AddTodo() {

    const[input, setInput] = useState('')
    const dispatch = useDispatch()
    
    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim() === '') {
            return
        }
        dispatch(addTodo(input))
        setInput('')
    }
    
  return (
    <div>
      
    </div>
  )
}

export default AddTodo
