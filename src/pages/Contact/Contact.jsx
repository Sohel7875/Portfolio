import React, { useState } from 'react'
import Loader from "react-js-loader"
import emailjs from '@emailjs/browser'


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
 

    let REACT_APP_SERVICE_ID = 'service_2659qu9'
    let REACT_APP_TEMPLATE_ID = 'template_xqg2o0m'
    let REACT_APP_PUBLIC_KEY = 'pss5pg5Y7CM_ZvPbF'
    emailjs
    .sendForm(
     REACT_APP_SERVICE_ID,
      REACT_APP_TEMPLATE_ID,
      e.target,
      REACT_APP_PUBLIC_KEY
    )
    .then(
      (result) => {
        // e.target.reset();
        setLoading(false)
        setStateMessage('Message sent!');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      },
      (error) => {
        setLoading(false)
        // e.target.reset();
        setStateMessage('Something went wrong, please try again later');
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5 seconds
      }
    );
  
  // Clears the form after sending the email
 
};


    
  


  return (
   <section>
    <HeadingText  title={'Contact'} titlePrimary={'me'}/>
    <div className="container contact-container">
      <form  onSubmit={handleSubmit}>
        <input type='text'  name='user_name' required placeholder='Your Name' />
        <input type='email' name='user_email' required placeholder='Your Email' />
        <input type='text' name='user_number' maxLength={10}
  minLength={10} required placeholder='Your Number' />
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