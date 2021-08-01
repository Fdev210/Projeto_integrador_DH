import './header.css'
import {useState,useEffect} from 'react'
import buscaAnime from '../../request/buscaAnime'



export default function Header() {
  const [info,setInfo] = useState({})
  const [show,setShow] = useState(false)

  useEffect(()=>{
    const anime = async ()=>{
         const res = await buscaAnime('naruto')

         setInfo(res.data[2])
         setShow(true)

    }
   anime()
  },[])
//useEffect(()=>{
//setShow(true)


//},[info])

    return (
        <div className='header'>
            <div className="headertitle">
                <span className='headertitlesm'>PROJECT</span>
                <span className='headertitlelg'>DH</span>
            </div>
            {show &&
            
            <img 
            className='headerimg' 
            //src="https://thetimestuck.com/wp-content/uploads/2013/11/Giuseppe-Sapori-Lake-Path.jpg" 
            src={info.attributes.posterImage.original}
            alt="" /> }
            
        </div>
    )
}
