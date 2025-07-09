import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {LogoutBtn,Input,logo} from './index'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from '../hooks/useForm'

function Login() {

    const navigation=useNavigate()
    const dispatch=useDispatch()
    const [error,setError]=useState('')
    const {register,handleSubmit} = useForm()
     const login = async (data) => {
        setError('')
        try {
            const user = await authService.login(data)
            if(session){
                const useData= await authService.getCurrentUser()
                if(useData) dispatch(authLogin(useData));
                navigation('/')
            }
        } catch (err) {
           setError(err.message || 'Login failed')
    }
}
  return (

    <div className='flex items-center justify-center w-full'>
        <div className={`max-auto w-full max-w-lg bg-grey-100 rounded-xl p-100 border border-black/10`}>
        <div className="mb-2 flex justify-center">
            <span className="innline-block w-full max-w-[100px]">
            <logo width="100%"/>
            </span>
            </div>
            <h2 classname="text-center text-2x1 font-bold leading-tight">Sign in to account</h2>
            <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} 
        className="mt-8">
            <div className='space-y-5'> 
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
                label="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <button
                type="submit"
                className="w-full"
                >Sign in</button>
                </div>
        </form>
      </div>
    </div>
  )
}

export default Login
