import React from 'react'
import {Link} from 'react-router-dom';
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""/>
          <h1 className="singlePostTitle">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>

              </div>
          </h1>
          <div className="singlePostInfo">
              <span>
                  Author :
                  <b className='singlePostAuthor'> <Link className='link' to='/posts?username=ahosanuzzamanroni'>ahosanuzzamanroni</Link>  </b>

              </span>
              <span> 1 day ago</span>


          </div>
          <p className="singlePostDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nam.
              <br />
              <br />
              Lorem ipsum dolor sit amet.
          </p>

            </div>
            
        </div>
    )
}
