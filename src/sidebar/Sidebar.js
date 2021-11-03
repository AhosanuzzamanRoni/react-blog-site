import React from 'react'
import {Link} from 'react-router-dom';
import './sidebar.css'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.pexels.com/photos/9668543/pexels-photo-9668543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className='link' to='/posts ? cat=Life'>
                        
                        Life </Link> </li>
                    <li className="sidebarListItem">
                        <Link className='link'to='/posts ? cat=Music'>
                        Music </Link></li>
                    <li className="sidebarListItem"> <Link className='link' to='/posts? cat=Style'>
                        Style
                        </Link>
                        </li>
                    <li className="sidebarListItem">
                        <Link className='link' to='/posts?cat=Sport'>
                        Sport </Link> </li>
                    <li className="sidebarListItem"> 
                    <Link className='link'to='/posts ? cat=Tech'>

                        Tech </Link></li>
                    <li className="sidebarListItem">
                        <Link className='link' to ='/posts ? cat=Chinema'>Chinema </Link> </li>
                </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Follow us</span>
                    <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>


                    </div>
                </div>

            
        </div>
    )
}
