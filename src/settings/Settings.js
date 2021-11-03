 import React from 'react'
 import './settings.css';
 import Sidebar from '../sidebar/Sidebar'

 
 export default function Settings() {
     return (
         <div className='settings'>
             <div className="settingsWrapper">
                 <div className="settingsTitle">
                     <span className="settingsTitleUpdate">
                         Update Your Account
                     </span>
                     <span className="settingsTitleDelete">Delete Account</span>
                     <form action="" className="settingsForm">
                         <label htmlFor="">Profile Picture</label>
                         <div className="settingsPP">
                         <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            
            <label htmlFor="">
                <i className="settingsPPIcon far fa-user-circle"></i>{''}
                </label>
                
                <input type="file" name="fileInput" id="fileInput"
                style={{display:'none'}}
                className='settingsPPInput' />


                         </div>
                         <label htmlFor="">Username</label>
                         <input type="text" name="" id="" 
                         placeholder='ahosanuzzamanroni'/>

                         <label htmlFor="">Email</label>
                         <input type="email" name="" id="" 
                         placeholder='ahosanuzzamanroni674@gmail.com'/>
                         <label htmlFor="">Password</label>
                         <input type="password" name="password" id=""
                         placeholder='Password' />

                         <button className='settingsSubmitButton' type='submit'>
                             Update
                         </button>


                     </form>


                 </div>
             </div>
             <Sidebar/>
             
         </div>
     )
 }
 