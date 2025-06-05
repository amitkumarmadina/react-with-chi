import React, { act, use } from 'react'
import {container,logo,LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function header() {
  const authStatus=useSelector((state)=>state.auth.status)
  const navigate=useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
   <header className='py-3 shadow-md bg-gray-500'>
    <container>
      <nav>
        <div className='mr-4'></div>
      </nav>
      </container>
      </header>
  )
}

export default header
