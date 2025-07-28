import React,{useEffect,useState} from 'react'
import appwriteService from '../services/appwriteService'
import { container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts().then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  if(posts.length === 0) {
    return (
      <div className='py-8'>
        <container>
          <h2 className='text-center text-2xl font-bold'>No Posts Available</h2>
        </container>
      </div>
    )
  }
  return (
    <div className='w-full py-8'>
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

export default Home
