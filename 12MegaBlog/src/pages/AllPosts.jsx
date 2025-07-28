import React,{useState,useEffect} from 'react'
import appwriteService from '../services/appwriteService'
import { useNavigate } from 'react-router-dom'
import { container,PostCard } from '../components'
import { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

function AllPosts() {
    comst [posts, setPosts] = useState([]);
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='py-8'>
      <container>
        <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
                    <PostCard post={post} />
                    </div>
            ))}
        </div>
      </container>
    </div>
  )
}

export default AllPosts
