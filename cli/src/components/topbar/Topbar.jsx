import { Link } from 'react-router-dom';
import './topbar.css'


function TopBar() {
     const user = false;

    return (
        <div className='top'>
            <div className='topleft'>
            <i className="topicon fab fa-facebook"></i>
            <i className="topicon fab fa-instagram"></i>
            <i className="topicon fab fa-twitter"></i>
            <i className="topicon fab fa-pinterest"></i>
            </div>
            <div className='topcenter'>
                <ul className='toplist'>
                    <li className='toplistitem'>
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className='toplistitem'>
                        <Link className='link' to='/single'>SINGLE</Link></li>
                    <li className='toplistitem'>  
                    <Link className='link' to='/search'>SEARCH</Link></li>
                    

                    <li className='toplistitem'>
                        {user && "LOGOUT"}
                    </li>
                     
                </ul>
            </div>
            <div className='topright'>
                {user ? (<img className='topimg'src="" alt="" />) :
                (
                    <ul className='toplist'>
                         <li className='toplistitem'>
                    <Link className='link' to='/login'>LOGIN</Link>
                     </li>
                     <li className='toplistitem'>
                    <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                    </ul>
                   
                )}
              
                <i className="topsearchicon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
