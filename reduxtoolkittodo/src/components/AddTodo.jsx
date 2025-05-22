import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import{} from '../features/todo/todoSlice'
function AddTodo() {

    const[input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) => {
        e.preventDefault()
        if(input.trim() === '') {
            return
        }
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Math.random(),
                title: input,
                completed: false
            }
        })
        setInput('')
    }
    
  return (
    <div>
      
    </div>
  )
}

export default AddTodo
