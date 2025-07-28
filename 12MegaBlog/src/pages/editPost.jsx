import React,{useEffect, useEffects,useState} from 'react'
import { container,PostForm } from '../components'
import appwriteService from '../services/appwriteService'
import { useParams } from 'react-router-dom';
import { useNavigate,useParams } from 'react-router-dom';
function editPost() {
    cosnt [post, setPost] = useState(null);
    const {slug}=useParams()
    const navigate = useNavigate();
    
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                } else {
                    navigate('/posts')
                }
            }).catch((error)=>{
                console.error("Error fetching post:", error);
                navigate('/posts');
            });
        }
    }, [slug,navigate])

  return post ? (
<div className='py-8'>
    <container>
      <PostForm post={post} />
    </container>
</div>
  ):null
  
}

export default editPost
