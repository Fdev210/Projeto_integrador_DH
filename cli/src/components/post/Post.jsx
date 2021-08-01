import './post.css'
import {Link} from 'react-router-dom'

export default function Post({post}) {
    console.log(post.attributes)
    return (
          <div className='post'>
            
            <img className='postimg'
            src={post.attributes.posterImage.medium} 
            alt="" />

            <div className="postinfo">

              <Link to={`/post/${post.id}`} className='link'>
                <span className="posttitle">
                {post.attributes.canonicalTitle}
                </span>
                </Link> 
                <hr />
                <span className="postdate">{new Date(post.attributes.createdAt).toDateString()}</span>
            </div>
            <p className='postdesc'>
                {post.attributes.synopsis}
                </p>
        </div>
    )
}
