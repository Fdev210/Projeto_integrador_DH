import { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import buscaAnime from '../../request/buscaAnime'

import './home.css'

import {useLocation} from 'react-router'

export default function Home() {
 const [posts,setPosts] = useState([])
 const {search} = useLocation();
 


useEffect(()=>{
    const fPosts = async ()=>{
      const res = await buscaAnime('naruto')

       setPosts(res.data)
 }

    fPosts()
    
},[])


    return (
        <>
           <Header/>
           <div className='home'>
            <Posts posts={posts}/>
            
            
            
            </div>
        </>    
    )
}
