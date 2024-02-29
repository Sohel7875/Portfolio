import React, { useState } from 'react'
import axios from 'axios'
import Loader from "react-js-loader"


import './Contact.css'

import HeadingText from '../../componants/HeadingText/HeadingText'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  const getLocalStorageTheme =() =>{
    let theme= 'light-theme';
    if(localStorage.getItem('theme')){
      theme= localStorage.getItem('theme')
    }
    return theme
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [loading,setLoading]=useState(false)

  const [Theme, setTheme] = useState(getLocalStorageTheme());

  



  const handleSubmit = async(e) =>{
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    setLoading(true)

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      number: e.target.elements.number.value,
      message: e.target.elements.message.value,
    };

   try {
    console.log('hii')
    const response = await axios.post('https://portfolio-36n4-oz4r9dh3r-sssohel786-gmailcom.vercel.app/email',formData)
 


    if (response.status === 200) {
      setLoading(false)
      setStateMessage('Message sent!');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      console.log(response.data)
      
     
    } else {
      console.log("error creating order", response);
      setLoading(false)
      setStateMessage('Something went wrong, please try again later');
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
    }
   } catch (error) {
    setLoading(false)
    setStateMessage('Something went wrong, please try again later');
    console.log(error)
   }
    
  }


  return (
   <section>
    <HeadingText  title={'Contact'} titlePrimary={'me'}/>
    <div className="container contact-container">
      <form  onSubmit={handleSubmit}>
        <input type='text'  name='name' required placeholder='Your Name' />
        <input type='email' name='email' required placeholder='Your Email' />
        <input type='text' name='number' required placeholder='Your Number' />
        <textarea name="message" id="message" rows="6" placeholder='Your Message'></textarea>
        <button type='submit' className='btn'>
          Send
          <span><FontAwesomeIcon icon={faPaperPlane} /></span>
        </button>
      </form>
        {loading? (<Loader type="box-rectangular" bgColor={Theme==='dark-theme'?' #3498db': ' #673ab7'} color={Theme==='dark-theme'?' #3498db': ' #673ab7'} title={"sending...."} size={35} style={{fontsize:40}} />): (stateMessage && 
        <p style={{textAlign:'center', fontSize:18,fontWeight:'bold'}}>{stateMessage}</p>)}
    </div>
   </section>
  )
}

export default Contact