import './write.css';
import React from 'react'

export default function Write() {
    return (

        <div className='write'>
            <img className='writeImg'src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />

            <form className='writeForm' action="">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
         
                    </label>
                    <input type="file" name="" id="fileInput" style={{display:'none'}} />

                    <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />



                </div>
                <div className="writeFormGroup">
                    <textarea className='writeInput writeText'
                    placeholder='Tell your story...'
                    type='text'
                    autoFocus={true} 
                    name="" id="" cols="30" rows="10"/>
                </div>
                <button className="writeSubmit" type='submit'> Publish</button>


            </form>
            
        </div>
    )
}

