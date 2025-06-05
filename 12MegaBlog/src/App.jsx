import React, { useState, useEffect, use } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import ervice from "./appwrite/auth"
import {login,logout} from  "./store/authSlice"
import { footer,header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const[loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
      dispatch(login({userData}))
    }else{
      dispatch(logout())
  }
    })
.finally(()=>setLoading(false))
  },[])  

  return !loading ? (
    <div className='min-h-scree flex flex-wrap'>
      <div className='w-full block'>
      <header/>
      <main>
        <Outlet/>
      </main>
      <footer/>
  </div>
    </div>
  ):null
}

export default App
