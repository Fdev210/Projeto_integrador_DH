import './singlepost.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import buscarAnime from '../../request/buscaAnime'

export default function SinglePost() {
  
  const [posts,setPosts] = useState({});
  const [show,setShow] = useState(false);

  useEffect (()=>{
    const getPost = async ()=>{
      const res = await buscarAnime('naruto')
          setPosts(res.data[3])
          setShow(true)

    }
    getPost()
  },[])
  

    return (
        <div className='singlepost'>
            <div className="singlepostwrapper">
              {show &&
                <img 
                 src={posts.attributes.posterImage.large}
                 alt="" 
                 className="singlepostimg" 
                />}
               {show &&
                <h1 className="singleposttitle">
                {posts.attributes.canonicalTitle}
                    <div className="singlepostedit">
                        <i className='singleposticon far fa-edit'></i>
                        <i className='singleposticon far fa-trash-alt'></i>
                    </div>
                </h1> }
                 <div className="singlepostinfo">
                     <span className="singloepostauthor">
                       Read:
                      <Link to={`/?user=${posts.id}`} className='link'>  
                     <b></b>
                       </Link>
                     </span>
                     <span className="singloepostdate"></span>
                 </div>
                {show&& 
                 <p className='singlepostdesc'>
                 {posts.attributes.synopsis}
                 </p>}
            </div>
        </div>
    )
}
