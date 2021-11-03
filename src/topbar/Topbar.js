import React from 'react'
import {Link} from 'react-router-dom';
import './topbar.css'


export default function Topbar() {
    const user =true;
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>


            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link'to='/'>
                        
                        Home</Link> </li>
                    <li className="topListItem"> 
                    <Link className='link' to='/About'> About </Link> </li>
                    <li className="topListItem"> 
                    <Link className='link' to='/write'>
                      Write </Link> </li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Logout</li>
                </ul>

            </div>
            <div className="topRight">
                { user ? (
                    <Link className='link' to='/settings'>
                        <img className='topImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

                    </Link>


                ) : (
                   <ul className="topList">
                       <li className='topListItem'>
                           <Link className='link' to='/register'> Register</Link>
                       </li>


                   </ul>

                )}

               
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
          
            
        </div>
    )
}
