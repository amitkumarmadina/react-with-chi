import React,{Children, useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({chilren,authentication=true}) {
    
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const useStatue=useSelector((state) => state.auth.status)
    useEffect(()=>{
        if(authentication && authStatue!=authentication){
            navigate('/login')

        }else if(!authentication && authStatue!==authentication){
            navigate('/')

        }
        setLoading(false)
    },[autStatus,authentication,navigate])
    
    
    return loading ? <h1>Loading...</h1> :<>{Children}</>
}
