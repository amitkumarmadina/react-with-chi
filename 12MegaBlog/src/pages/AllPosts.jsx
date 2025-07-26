import React,{useState,useEffect} from 'react'
import appwriteService from '../services/appwriteService'
import { useNavigate } from 'react-router-dom'
import { container,PostCard } from '../components'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

function AllPosts() {
    comst [posts, setPosts] = useState([]);
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts)=>setPosts(posts))
  return (
    <div>
      
    </div>
  )
}

export default AllPosts
