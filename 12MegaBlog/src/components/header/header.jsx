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
      <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
          <logo wigth ='70px'></logo>
          </Link>
        </div>
        <ul className='flex ml-auto'>
          {navItems.map((items)=>
            items.active ? (
              <li key ={items.name}>
                <button
                onClick={()=>navigate(items.slug)}
                className='inline-block px-4 py-2 duration-200 hover:bg-gray-100 rounded-full'
                >{items.name}</button>
              </li>
            ):null
          )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
        </ul>
      </nav>
      </container>
      </header>
  )
}

export default header
