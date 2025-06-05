import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

  return (
    <div className='inline-block px-4 py-2 duration-300 hover:bg-blue-100 rounded-full'>
      Logout
    </div>
  )
}

export default LogoutBtn
