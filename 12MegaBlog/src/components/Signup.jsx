import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link ,useNavigate} from 'react-router-dom'
import { login } from '../store/authSlice'
import {Button, Input, logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error,setError]= useDispatch()
    const dispatch=useDispatch()
    const {register,handleSubmit} = useForm()
    const create = async (data) => {
        setError('')
        try {
            const userData = await authService.createAccount(data)
            if(userData){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData))
                navigate('/')
            }
        } catch (err) {
            setError(err.message || 'Signup failed')
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <logo width="100%"/>
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className='mt-2 text-center text-base text-black/60'>Already have an account ? &nbsp;
        <Link
        to="/login"
        className="text-blue-500 hover:text-blue-700">
        Sign In
        </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
            label="Full Name "
            placeholder="Enter your full name"
            {...register('name', { required: true })}
            
            />
             <Input 
                            lable="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register('email', {
                                required: true,
                            validate:{
                                matchPattern: (value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) || "Invalid email format",
                            }}
                            )}
                            />
                            <Input 
                            lable="Password: "
                            placeholder="Enter your password"
                            type="password"
                            {...register('password', {
                                required: true,
                            })}
                            />
                            <Button>Create Account</Button>
                            
          </div>
        </form>
        </div>
      SignUp
    </div>
  )
}

export default Signup
