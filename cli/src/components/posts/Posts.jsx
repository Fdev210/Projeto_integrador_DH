import Post from '../post/Post'
import './posts.css'

export default function Posts({posts}) {
    return (
        <div className='posts'>
            {posts.map((p) => {
             return   <Post key={p.id} post={p}/>
            })}
        </div>
    )
}
